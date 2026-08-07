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
      className="border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8"
      aria-describedby="register-note"
    >
      <h2 className="font-display text-xl font-semibold text-nishaan-ink">
        Interest form
      </h2>
      <p id="register-note" className="mt-2 text-sm text-nishaan-muted">
        Demo shell only — does not submit to a backend. Official registration URL
        will be linked here.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="reg-name" className="block text-sm font-medium">
            Full name
          </label>
          <input
            id="reg-name"
            name="name"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-md border border-[var(--border)] px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="reg-email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="reg-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-md border border-[var(--border)] px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="reg-college" className="block text-sm font-medium">
            College / institution
          </label>
          <input
            id="reg-college"
            name="college"
            required
            className="mt-1 w-full rounded-md border border-[var(--border)] px-3 py-2"
          />
        </div>
        <fieldset>
          <legend className="text-sm font-medium">Category interest</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {eventCategories.map((c) => (
              <label
                key={c.slug}
                className="flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-sm"
              >
                <input
                  type="checkbox"
                  name="categories"
                  value={c.slug}
                  className="accent-nishaan-leaf"
                />
                {c.title}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="reg-access" className="block text-sm font-medium">
            Access requirements (optional)
          </label>
          <textarea
            id="reg-access"
            name="access"
            rows={3}
            className="mt-1 w-full rounded-md border border-[var(--border)] px-3 py-2"
            placeholder="e.g. wheelchair access, interpreter, large print…"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 rounded-md bg-oae-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--oae-primary-dark)]"
      >
        Submit interest
      </button>

      {status === "sent" ? (
        <p className="mt-4 text-sm text-nishaan-leaf-deep" role="status">
          Interest recorded locally in this demo. Watch this page for the official
          registration link.
        </p>
      ) : null}
    </form>
  );
}
