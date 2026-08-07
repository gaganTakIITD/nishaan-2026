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
      className="imprint-tile h-fit bg-white p-6 sm:p-8"
      noValidate={false}
      aria-describedby="contact-form-note"
    >
      <h2 className="font-display text-2xl font-semibold tracking-tight text-balance text-oae-text">
        Send a message
      </h2>
      <p
        id="contact-form-note"
        className="mt-2 text-sm leading-relaxed text-oae-muted"
      >
        Placeholder form — submissions are not sent to a server yet. Prefer email
        for urgent queries.
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-oae-text"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className="field-input mt-1.5"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-oae-text"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="field-input mt-1.5"
          />
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-oae-text"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="field-input mt-1.5"
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-primary mt-8 rounded-xl px-6 py-3 text-sm"
      >
        Submit
      </button>

      {status === "sent" ? (
        <p
          className="mt-5 rounded-xl border border-oae-border bg-oae-mint/50 px-4 py-3 text-sm leading-relaxed text-oae-primary-dark"
          role="status"
        >
          Thanks — this demo form does not transmit data yet. Please email OAE
          directly for now.
        </p>
      ) : null}
    </form>
  );
}
