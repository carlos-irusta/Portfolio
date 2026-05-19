"use client";

import { currently } from "@/lib/data";
import { Section } from "./section";

export function Currently() {
  return (
    <Section id="currently" label="Currently">
      <div>
        {currently.map((item, i) => (
          <div
            key={item.label}
            className="flex items-baseline gap-8 py-3.5"
            style={{
              borderTop: i === 0 ? "none" : "1px solid var(--border)",
            }}
          >
            <span
              className="text-[10px] font-mono uppercase tracking-[0.16em] w-16 shrink-0"
              style={{ color: "var(--text-tertiary)" }}
            >
              {item.label}
            </span>
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
