"use client";

import { FormEvent, useState } from "react";
import { eventCategories } from "@/content/events";

export function RegisterForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <form
      id="register-form"
      onSubmit={onSubmit}
      className="imprint-tile bg-white p-6 sm:p-8"
      aria-describedby="register-note"
    >
      <h2 className="font-display text-2xl font-semibold tracking-tight text-balance text-oae-text">
        Interest Form
      </h2>
      <p id="register-note" className="mt-2 text-sm leading-relaxed text-oae-muted">
        Demo shell only — does not submit to a backend. Official registration URL
        will be linked here.
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="reg-name"
            className="block text-sm font-medium text-oae-text"
          >
            Full Name
          </label>
          <input
            id="reg-name"
            name="name"
            required
            autoComplete="name"
            className="field-input mt-1.5"
          />
        </div>
        <div>
          <label
            htmlFor="reg-email"
            className="block text-sm font-medium text-oae-text"
          >
            Email
          </label>
          <input
            id="reg-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="field-input mt-1.5"
          />
        </div>
        <div>
          <label
            htmlFor="reg-college"
            className="block text-sm font-medium text-oae-text"
          >
            College / Institution
          </label>
          <input
            id="reg-college"
            name="college"
            required
            className="field-input mt-1.5"
          />
        </div>
        <fieldset>
          <legend className="text-sm font-medium text-oae-text">
            Category Interest
          </legend>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {eventCategories.map((c) => (
              <label
                key={c.slug}
                className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-oae-border bg-oae-bg/60 px-3.5 py-2.5 text-sm text-oae-text transition-all duration-300 ease-out hover:border-oae-primary/30 hover:bg-oae-mint/40 has-[:checked]:border-oae-primary/40 has-[:checked]:bg-oae-mint/60"
              >
                <input
                  type="checkbox"
                  name="categories"
                  value={c.slug}
                  className="accent-oae-primary"
                />
                {c.title}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label
            htmlFor="reg-access"
            className="block text-sm font-medium text-oae-text"
          >
            Access Requirements{" "}
            <span className="font-normal text-oae-muted">(Optional)</span>
          </label>
          <textarea
            id="reg-access"
            name="access"
            rows={3}
            className="field-input mt-1.5"
            placeholder="e.g. wheelchair access, interpreter, large print…"
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-primary mt-8 rounded-xl px-6 py-3 text-sm"
      >
        Submit Interest
      </button>

      {status === "sent" ? (
        <p
          className="mt-5 rounded-xl border border-oae-border bg-oae-mint/50 px-4 py-3 text-sm leading-relaxed text-oae-primary-dark"
          role="status"
        >
          Interest recorded locally in this demo. Watch this page for the
          official registration link.
        </p>
      ) : null}
    </form>
  );
}
