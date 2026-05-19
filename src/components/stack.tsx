"use client";

import { stack } from "@/lib/data";
import { Section } from "./section";

export function Stack() {
  return (
    <Section id="stack" label="Stack">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-8">
        {stack.map((category) => (
          <div key={category.label}>
            <p
              className="text-[10px] font-mono uppercase tracking-[0.16em] mb-4"
              style={{ color: "var(--text-tertiary)" }}
            >
              {category.label}
            </p>
            <ul className="space-y-2.5">
              {category.items.map((item) => (
                <li key={item} className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
