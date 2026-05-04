"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        setStatus("error");
        setErrorMessage(data.error ?? "Failed to send message.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <label className="grid gap-2">
        <span className="text-sm font-medium text-stone-200">Name</span>
        <input
          name="name"
          required
          className="h-11 rounded-xl border border-white/15 bg-black/30 px-3 text-sm text-white outline-none transition focus:border-lime-300/70"
          placeholder="Your name"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-stone-200">Phone number</span>
        <input
          name="phone"
          required
          className="h-11 rounded-xl border border-white/15 bg-black/30 px-3 text-sm text-white outline-none transition focus:border-lime-300/70"
          placeholder="Your phone number"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-stone-200">Email address</span>
        <input
          name="email"
          type="email"
          required
          className="h-11 rounded-xl border border-white/15 bg-black/30 px-3 text-sm text-white outline-none transition focus:border-lime-300/70"
          placeholder="you@example.com"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-stone-200">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white outline-none transition focus:border-lime-300/70"
          placeholder="Tell us about your location and preferred setup."
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-11 items-center justify-center rounded-full bg-lime-400 px-7 text-sm font-semibold text-[#091014] transition hover:bg-lime-300 disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-lime-300">
          Message sent successfully. We will contact you soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-300">{errorMessage}</p>
      )}
    </form>
  );
}
