"use client";

import { useState, FormEvent } from "react";

const services = [
  "Windows & Doors",
  "Drywall Repair",
  "Trim Molding",
  "Electrical",
  "Plumbing",
  "Masonry",
  "Other",
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: if this hidden field is filled, it's a bot. Pretend success, send nothing.
    if (data.company) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-brass/40 bg-ink p-6 text-center">
        <p className="font-display text-lg font-bold uppercase tracking-wide text-brass-light">
          Message sent
        </p>
        <p className="mt-2 font-body text-sm text-steel">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field — hidden from real users, left blank by them */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block font-mono text-xs uppercase tracking-wide text-steel"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-sm border border-brass/30 bg-charcoal px-3 py-2 font-body text-sm text-bone placeholder:text-steel/60 focus:border-brass"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1 block font-mono text-xs uppercase tracking-wide text-steel"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-sm border border-brass/30 bg-charcoal px-3 py-2 font-body text-sm text-bone placeholder:text-steel/60 focus:border-brass"
            placeholder="(555) 555-5555"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block font-mono text-xs uppercase tracking-wide text-steel"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-sm border border-brass/30 bg-charcoal px-3 py-2 font-body text-sm text-bone placeholder:text-steel/60 focus:border-brass"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1 block font-mono text-xs uppercase tracking-wide text-steel"
        >
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-sm border border-brass/30 bg-charcoal px-3 py-2 font-body text-sm text-bone focus:border-brass"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block font-mono text-xs uppercase tracking-wide text-steel"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-sm border border-brass/30 bg-charcoal px-3 py-2 font-body text-sm text-bone placeholder:text-steel/60 focus:border-brass"
          placeholder="Tell us about the job — what needs to be done, and where."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-sm bg-brass px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-brass-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="font-body text-sm text-red-400" role="alert">
          Something went wrong sending your message. Please call (786)
          851-4038 instead, or try again.
        </p>
      )}
    </form>
  );
}
