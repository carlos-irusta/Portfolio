"use client";

import { useLang } from "@/lib/lang-context";
import { Section } from "./section";

export function Currently() {
  const { t } = useLang();

  return (
    <Section id="currently" label={t.sections.currently}>
      <div>
        {t.currently.map((item, i) => (
          <div
            key={item.label}
            className="flex items-center gap-6 py-2.5"
            style={{
              borderTop: "1px solid var(--border)",
              ...(i === t.currently.length - 1 ? { borderBottom: "1px solid var(--border)" } : {}),
            }}
          >
            <span
              className="text-[11px] font-mono uppercase tracking-[0.1em] w-20 shrink-0"
              style={{ color: "var(--text-label)" }}
            >
              {item.label}
            </span>
            <span
              className="text-sm leading-snug"
              style={{ color: "var(--text-secondary)" }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
