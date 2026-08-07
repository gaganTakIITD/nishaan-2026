"use client";

import { useState } from "react";
import { mapPoints } from "@/content/team";

const spots = [
  { id: "lhc", x: 180, y: 140 },
  { id: "ramps", x: 300, y: 200 },
  { id: "lifts", x: 420, y: 150 },
  { id: "washrooms", x: 250, y: 280 },
  { id: "erickshaw", x: 480, y: 260 },
  { id: "hostels", x: 520, y: 100 },
] as const;

export function CampusMap() {
  const [active, setActive] = useState<string>(mapPoints[0]?.id ?? "lhc");
  const current = mapPoints.find((p) => p.id === active) ?? mapPoints[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
      <div
        className="imprint-tile relative min-h-[340px] overflow-hidden bg-oae-mint p-0"
        role="img"
        aria-label="Schematic campus accessibility diagram. Select points from the list for details."
      >
        <svg viewBox="0 0 640 400" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="mapWash" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e7eee8" />
              <stop offset="100%" stopColor="#faf8f4" />
            </linearGradient>
          </defs>
          <rect width="640" height="400" fill="url(#mapWash)" />
          <path
            d="M40 320 C160 280, 240 200, 320 180 S480 140, 600 120"
            fill="none"
            stroke="#1b7a3d"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M80 80 C200 120, 260 220, 300 300 S420 360, 560 340"
            fill="none"
            stroke="#145c2e"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.25"
          />
          {spots.map((spot) => {
            const selected = active === spot.id;
            return (
              <g key={spot.id}>
                {selected ? (
                  <circle
                    cx={spot.x}
                    cy={spot.y}
                    r={22}
                    fill="#1b7a3d"
                    opacity="0.15"
                  />
                ) : null}
                <circle
                  cx={spot.x}
                  cy={spot.y}
                  r={selected ? 14 : 10}
                  fill={selected ? "#1b7a3d" : "#145c2e"}
                  className="transition-all duration-300"
                />
                <circle
                  cx={spot.x}
                  cy={spot.y}
                  r={selected ? 5 : 3.5}
                  fill="#ffffff"
                />
              </g>
            );
          })}
          <text x="24" y="36" fill="#145c2e" fontSize="13" fontWeight="600">
            IIT Delhi · schematic (not to scale)
          </text>
        </svg>
      </div>

      <div className="imprint-tile p-5 sm:p-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-oae-primary">
          Select a point
        </h2>
        <ul
          className="mt-4 divide-y divide-oae-border"
          role="listbox"
          aria-label="Map points"
        >
          {mapPoints.map((point) => {
            const selected = point.id === active;
            return (
              <li key={point.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`w-full px-1 py-3.5 text-left text-sm transition-all duration-300 ease-out ${
                    selected
                      ? "font-semibold text-oae-primary"
                      : "text-oae-text hover:text-oae-primary"
                  }`}
                  onClick={() => setActive(point.id)}
                >
                  {point.name}
                </button>
              </li>
            );
          })}
        </ul>
        {current ? (
          <div
            className="mt-5 rounded-xl border border-oae-border bg-oae-bg p-4"
            aria-live="polite"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-oae-primary">
              {current.type}
            </p>
            <p className="mt-1.5 font-display text-lg font-semibold tracking-tight text-oae-text">
              {current.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-oae-muted">
              {current.detail}
            </p>
            <a
              href={`#map-${current.id}`}
              className="mt-3 inline-block text-sm font-semibold text-oae-primary-dark underline decoration-oae-primary/30 underline-offset-4"
            >
              Jump to list entry
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
