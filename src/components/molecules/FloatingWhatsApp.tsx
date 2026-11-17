import { WHATSAPP_URL } from "@/lib/cta";

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Benevox on WhatsApp"
    style={{
      position: "fixed", right: 20, bottom: 20, zIndex: 90,
      background: "#25D366", color: "#fff", font: "700 14px/1 Inter",
      padding: "14px 20px", borderRadius: 999,
      boxShadow: "0 8px 24px rgba(0,0,0,.25)",
    }}
  >
    WhatsApp us
  </a>
);

export default FloatingWhatsApp;
