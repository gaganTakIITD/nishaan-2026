"use client";

import { useState } from "react";
import { mapPoints } from "@/content/team";

export function CampusMap() {
  const [active, setActive] = useState<string>(mapPoints[0]?.id ?? "lhc");
  const current = mapPoints.find((p) => p.id === active) ?? mapPoints[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
      <div
        className="relative min-h-[340px] overflow-hidden border border-[var(--border)] bg-nishaan-mist"
        role="img"
        aria-label="Schematic campus accessibility diagram. Select points from the list for details."
      >
        <svg viewBox="0 0 640 400" className="h-full w-full" aria-hidden="true">
          <rect width="640" height="400" fill="#E4F0E5" />
          <path
            d="M40 320 C160 280, 240 200, 320 180 S480 140, 600 120"
            fill="none"
            stroke="#1B6B3A"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M80 80 C200 120, 260 220, 300 300 S420 360, 560 340"
            fill="none"
            stroke="#A67C2A"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.4"
          />
          {[
            { id: "lhc", x: 180, y: 140 },
            { id: "ramps", x: 300, y: 200 },
            { id: "lifts", x: 420, y: 150 },
            { id: "washrooms", x: 250, y: 280 },
            { id: "erickshaw", x: 480, y: 260 },
            { id: "hostels", x: 520, y: 100 },
          ].map((spot) => {
            const selected = active === spot.id;
            return (
              <g key={spot.id}>
                <circle
                  cx={spot.x}
                  cy={spot.y}
                  r={selected ? 14 : 10}
                  fill={selected ? "#D94B38" : "#1B6B3A"}
                />
              </g>
            );
          })}
          <text x="24" y="36" fill="#14532D" fontSize="13" fontWeight="600">
            IIT Delhi · schematic (not to scale)
          </text>
        </svg>
      </div>

      <div>
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-nishaan-leaf-deep">
          Select a point
        </h2>
        <ul className="mt-4 divide-y divide-[var(--border)]" role="listbox" aria-label="Map points">
          {mapPoints.map((point) => {
            const selected = point.id === active;
            return (
              <li key={point.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`w-full px-1 py-3 text-left text-sm transition ${
                    selected
                      ? "font-semibold text-nishaan-coral"
                      : "text-nishaan-ink hover:text-nishaan-leaf-deep"
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
          <div className="mt-6 border-t border-[var(--border)] pt-4" aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nishaan-leaf">
              {current.type}
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-nishaan-ink">
              {current.name}
            </p>
            <p className="mt-2 text-sm text-nishaan-muted">{current.detail}</p>
            <a
              href={`#map-${current.id}`}
              className="mt-3 inline-block text-sm font-semibold text-nishaan-leaf-deep"
            >
              Jump to list entry
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
