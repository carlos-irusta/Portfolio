"use client";

import { useLang } from "@/lib/lang-context";
import { Section } from "./section";

export function ComingSoon() {
  const { t } = useLang();

  return (
    <Section id="coming-soon" label={t.sections.upcoming}>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {t.upcoming.map((item) => (
          <span
            key={item}
            className="text-[12px] font-mono"
            style={{ color: "var(--text-tertiary)", opacity: 0.65 }}
          >
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
