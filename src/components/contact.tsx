"use client";

import { personal } from "@/lib/data";
import { useLang } from "@/lib/lang-context";
import { Section } from "./section";

/* Small inline icons for contact links — monochrome, 13px */
const EmailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0112 7.43c.85 0 1.7.12 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49C19.14 20.62 22 16.78 22 12.25 22 6.59 17.52 2 12 2z" fill="currentColor"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M7 10v7M7 7.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M11 17v-4c0-1.1.9-2 2-2s2 .9 2 2v4M11 10v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const icons = [EmailIcon, GitHubIcon, LinkedInIcon];

export function Contact() {
  const { t } = useLang();
  const { intro, links } = t.contact;

  const hrefs = [
    `mailto:${personal.email}`,
    personal.github,
    personal.linkedin,
  ];

  return (
    <Section id="contact" label={t.sections.contact}>
      <div className="space-y-7">
        <p
          className="text-[0.9375rem] leading-[1.7] max-w-[360px]"
          style={{ color: "var(--text-secondary)" }}
        >
          {intro}
        </p>

        <div>
          {links.map((link, i) => {
            const Icon = icons[i];
            const href = hrefs[i];
            return (
              <a
                key={link.label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center justify-between py-2.5 transition-colors duration-150 group"
                style={{
                  borderTop: "1px solid var(--border)",
                  ...(i === links.length - 1 ? { borderBottom: "1px solid var(--border)" } : {}),
                }}
                onMouseEnter={e => {
                  (e.currentTarget.querySelector("[data-val]") as HTMLElement | null)
                    ?.style.setProperty("color", "var(--text-secondary)");
                  (e.currentTarget.querySelector("[data-icon]") as HTMLElement | null)
                    ?.style.setProperty("opacity", "1");
                }}
                onMouseLeave={e => {
                  (e.currentTarget.querySelector("[data-val]") as HTMLElement | null)
                    ?.style.setProperty("color", "var(--text-tertiary)");
                  (e.currentTarget.querySelector("[data-icon]") as HTMLElement | null)
                    ?.style.setProperty("opacity", "0.65");
                }}
              >
                {/* Label + icon */}
                <span className="flex items-center gap-2">
                  <span
                    data-icon
                    className="flex items-center transition-opacity duration-150"
                    style={{ color: "var(--text-label)", opacity: 0.65 }}
                  >
                    <Icon />
                  </span>
                  <span
                    className="text-[11px] font-mono uppercase tracking-[0.1em]"
                    style={{ color: "var(--text-label)" }}
                  >
                    {link.label}
                  </span>
                </span>

                {/* Value */}
                <span
                  data-val
                  className="text-[12px] font-mono transition-colors duration-150"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {link.display}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
