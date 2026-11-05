import { site } from "@/config/site";
import { Icon } from "@/components/icons";

/**
 * Fixed WhatsApp bubble, shown on every page. Opens a chat with a short
 * pre-filled message.
 */
export function WhatsAppButton() {
  const digits = site.whatsapp.replace(/[^\d]/g, "");
  const href = `https://wa.me/${digits}?text=${encodeURIComponent(
    "Hello, I have a question about a private trip in Morocco.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed bottom-[5.25rem] right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#20bd5a] lg:bottom-6 lg:right-6 lg:h-14 lg:w-14"
    >
      <Icon.WhatsApp className="h-6 w-6 lg:h-7 lg:w-7" />
    </a>
  );
}
