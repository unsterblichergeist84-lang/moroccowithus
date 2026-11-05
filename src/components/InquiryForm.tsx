"use client";

import { useState } from "react";
import { getAllTours } from "@/lib/tours";

type Status = "idle" | "submitting" | "success" | "error";

const tourOptions = getAllTours().map((t) => ({ slug: t.slug, title: `${t.departure}: ${t.title}` }));

export function InquiryForm({ defaultTour }: { defaultTour?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-sand-300 bg-sand-100 p-6 text-dune-800"
      >
        <p className="font-semibold">Thank you - your inquiry is on its way.</p>
        <p className="mt-2 text-sm">
          We read every message ourselves and usually reply within one working
          day. If it is urgent, WhatsApp is faster.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-accent-600 underline hover:text-accent-700"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  const busy = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="grid grid-cols-1 gap-1 text-sm">
          <span className="font-medium text-dune-800">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="rounded-lg border border-sand-300 bg-white px-3 py-2 outline-none focus:border-sand-500"
          />
        </label>
        <label className="grid grid-cols-1 gap-1 text-sm">
          <span className="font-medium text-dune-800">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-lg border border-sand-300 bg-white px-3 py-2 outline-none focus:border-sand-500"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="grid grid-cols-1 gap-1 text-sm">
          <span className="font-medium text-dune-800">Tour of interest</span>
          <select
            name="tour"
            defaultValue={defaultTour ?? ""}
            className="rounded-lg border border-sand-300 bg-white px-3 py-2 outline-none focus:border-sand-500"
          >
            <option value="">Not sure yet</option>
            {tourOptions.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.title}
              </option>
            ))}
          </select>
        </label>
        <label className="grid grid-cols-1 gap-1 text-sm">
          <span className="font-medium text-dune-800">Rough dates / group size</span>
          <input
            name="details"
            placeholder="e.g. late April, 2 adults"
            className="rounded-lg border border-sand-300 bg-white px-3 py-2 outline-none focus:border-sand-500"
          />
        </label>
      </div>

      <label className="grid grid-cols-1 gap-1 text-sm">
        <span className="font-medium text-dune-800">What do you have in mind?</span>
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-lg border border-sand-300 bg-white px-3 py-2 outline-none focus:border-sand-500"
        />
      </label>

      {status === "error" && error && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <p className="text-xs text-dune-500">
        By sending this you agree we may use your details to reply, as described in
        our <a href="/privacy" className="underline hover:text-dune-700">privacy policy</a>.
      </p>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={busy}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? "Sending..." : "Send inquiry"}
        </button>
        {busy && <span className="text-sm text-dune-500">One moment...</span>}
      </div>

      <p className="text-xs text-dune-500">
        No booking is made by sending this. We reply with questions and a
        proposed itinerary.
      </p>
    </form>
  );
}
