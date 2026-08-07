"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8"
      noValidate={false}
      aria-describedby="contact-form-note"
    >
      <h2 className="font-display text-xl font-semibold text-nishaan-ink">
        Send a message
      </h2>
      <p id="contact-form-note" className="mt-2 text-sm text-nishaan-muted">
        Placeholder form — submissions are not sent to a server yet. Prefer email
        for urgent queries.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-nishaan-ink"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-nishaan-ink"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-nishaan-ink"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 rounded-md bg-nishaan-leaf px-5 py-2.5 text-sm font-semibold text-white hover:bg-nishaan-leaf-deep"
      >
        Submit
      </button>

      {status === "sent" ? (
        <p className="mt-4 text-sm text-nishaan-leaf-deep" role="status">
          Thanks — this demo form does not transmit data yet. Please email OAE
          directly for now.
        </p>
      ) : null}
    </form>
  );
}
