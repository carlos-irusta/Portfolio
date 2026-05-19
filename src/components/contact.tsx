"use client";

import { personal } from "@/lib/data";
import { Section } from "./section";

const links = [
  { label: "Email", display: personal.email, href: `mailto:${personal.email}` },
  { label: "GitHub", display: "github.com/carlos", href: personal.github },
  { label: "LinkedIn", display: "linkedin.com/in/carlos", href: personal.linkedin },
];

export function Contact() {
  return (
    <Section id="contact" label="Contact">
      <div className="space-y-8">
        <p className="text-sm max-w-sm leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
          Available for focused, well-scoped projects.
          Reach out directly.
        </p>

        <div>
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-center justify-between py-3.5 transition-colors duration-150 group"
              style={{
                borderTop: i === 0 ? "1px solid var(--border)" : "1px solid var(--border)",
                borderBottom: i === links.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <span
                className="text-[10px] font-mono uppercase tracking-[0.16em]"
                style={{ color: "var(--text-tertiary)" }}
              >
                {link.label}
              </span>
              <span
                className="text-[11px] font-mono transition-colors duration-150"
                style={{ color: "var(--text-tertiary)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-tertiary)")}
              >
                {link.display}
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
