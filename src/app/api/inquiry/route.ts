import { NextResponse } from "next/server";
import { getTourSlugs } from "@/lib/tours";
import { site } from "@/config/site";

/**
 * Inquiry endpoint.
 *
 * Delivery uses Resend (https://resend.com) when these env vars are set:
 *   RESEND_API_KEY      - API key
 *   INQUIRY_TO_EMAIL    - where inquiries are sent (defaults to site.email)
 *   INQUIRY_FROM_EMAIL  - verified sender, e.g. "Morocco With Us <inquiries@moroccowithus.com>"
 * Without them, inquiries are only validated and logged, and in production the
 * form reports an error instead of pretending the message was sent.
 */

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  tour?: string;
  details?: string;
  message?: string;
  /** Honeypot - real users never fill this. */
  company?: string;
};

// Best-effort per-IP limit (in-memory, resets per serverless instance).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.company) {
    // Silently accept the honeypot hit so the bot sees success.
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (message.length < 10) {
    return NextResponse.json(
      { error: "Please add a little more detail to your message." },
      { status: 400 },
    );
  }

  const tour =
    body.tour && getTourSlugs().includes(body.tour) ? body.tour : undefined;

  const inquiry = {
    receivedAt: new Date().toISOString(),
    name,
    email,
    tour,
    details: body.details?.trim() || undefined,
    message,
  };

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL;
  const to = process.env.INQUIRY_TO_EMAIL || site.email;

  if (!apiKey || !from) {
    console.info("[inquiry - not delivered, email not configured]", JSON.stringify(inquiry));
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "We could not send your message. Please email us or use WhatsApp." },
        { status: 503 },
      );
    }
    return NextResponse.json({ ok: true });
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Tour: ${tour ?? "not specified"}`,
    `Dates / group: ${inquiry.details ?? "not given"}`,
    "",
    message,
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New inquiry: ${name}${tour ? ` - ${tour}` : ""}`,
      text: lines.join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("[inquiry] email send failed", res.status, await res.text());
    return NextResponse.json(
      { error: "We could not send your message. Please email us or use WhatsApp." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
