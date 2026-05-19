"use client";

import { comingSoon } from "@/lib/data";
import { Section } from "./section";

export function ComingSoon() {
  return (
    <Section id="coming-soon" label="Upcoming">
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {comingSoon.map((item) => (
          <span
            key={item}
            className="text-[11px] font-mono"
            style={{ color: "var(--text-tertiary)", opacity: 0.5 }}
          >
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
