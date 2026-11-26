import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

const API = (import.meta.env.VITE_API_URL as string | undefined) ?? "https://api.benevox.africa";
const KINDS = [
  { value: "client", label: "I need software built" },
  { value: "partner", label: "Cloud or business partner" },
  { value: "other", label: "Something else" },
];
const field = {
  width: "100%", boxSizing: "border-box", padding: "12px 14px", borderRadius: 12,
  border: "1px solid hsl(var(--home-border))", background: "transparent", color: "inherit", font: "400 15px Inter",
} as const;

export default function Contact() {
  const [params] = useSearchParams();
  const initial = KINDS.some(k => k.value === params.get("kind")) ? params.get("kind")! : "client";
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending"); setMsg("");
    const body = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch(`${API}/api/leads`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...body, source: "site-contact" }) });
      if (res.status === 429) throw new Error("Too many requests. Please try again in a few minutes.");
      if (!res.ok) throw new Error("We could not save your message. Please use WhatsApp instead.");
      setState("done");
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  return (
    <div style={{ background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))", fontFamily: "'Inter',sans-serif", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "96px 24px 64px" }}>
        <h1 style={{ font: "800 clamp(28px,5vw,40px)/1.2 Inter", letterSpacing: "-0.03em", margin: "0 0 12px" }}>Talk to Benevox</h1>
        <p style={{ color: "hsl(var(--home-muted))", margin: "0 0 28px" }}>Tell us what you need. A person replies, usually within one working day.</p>
        {state === "done" ? (
          <p style={{ font: "600 18px Inter" }}>Thank you. We have your message.</p>
        ) : (
          <form onSubmit={submit} style={{ display: "grid", gap: 14 }}>
            <select name="kind" defaultValue={initial} style={field}>{KINDS.map(k => <option key={k.value} value={k.value}>{k.label}</option>)}</select>
            <input name="name" placeholder="Your name" required maxLength={200} style={field} />
            <input name="company" placeholder="Company" maxLength={200} style={field} />
            <input name="email" type="email" placeholder="Email" maxLength={320} style={field} />
            <input name="phone" placeholder="Phone or WhatsApp" maxLength={40} style={field} />
            <textarea name="message" placeholder="What do you want to build?" rows={5} maxLength={4000} style={field} />
            {/* Honeypot: hidden from people, bots fill it in. */}
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }} />
            <p style={{ fontSize: 13, color: "hsl(var(--home-muted))", margin: 0 }}>Email or phone is needed so we can reply.</p>
            <button disabled={state === "sending"} style={{ padding: "14px 20px", borderRadius: 999, border: 0, background: "hsl(38 75% 52%)", color: "#1a1206", font: "700 15px Inter", cursor: "pointer" }}>
              {state === "sending" ? "Sending…" : "Send"}
            </button>
            {state === "error" && <p role="alert" style={{ color: "hsl(0 70% 60%)", margin: 0 }}>{msg}</p>}
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}
