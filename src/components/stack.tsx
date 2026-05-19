"use client";

import { stack } from "@/lib/data";
import { useLang } from "@/lib/lang-context";
import { Section } from "./section";

/*
  Inline SVG icons — every stack item has a matching icon.
  Consistent sizing: 13×13, 1px grid-aligned.
  Brand color used only where it's tasteful and recognizable.
  Everything else integrates into the Kanagawa palette via currentColor.
*/

// Wrapper for consistent icon container
function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="shrink-0 flex items-center"
      style={{ width: 13, height: 13 }}
    >
      {children}
    </span>
  );
}

const icons: Record<string, React.ReactNode> = {
  // ── Languages ───────────────────────────────────────────────
  TypeScript: (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect width="24" height="24" rx="2" fill="#3178c6" fillOpacity="0.8" />
        <path
          d="M13.5 14.5v1.75c.29.15.63.27 1.02.35.39.08.8.12 1.23.12.42 0 .82-.04 1.2-.13.38-.09.71-.23.99-.43.28-.2.5-.46.66-.78.16-.32.24-.71.24-1.17 0-.34-.05-.63-.15-.88a2.1 2.1 0 00-.43-.67c-.18-.19-.4-.36-.65-.51l-.83-.46c-.23-.13-.43-.25-.59-.36a2 2 0 01-.4-.33.96.96 0 01-.22-.34.93.93 0 01-.07-.38c0-.12.02-.24.07-.34.05-.1.12-.19.21-.26.1-.07.21-.13.35-.17.14-.04.3-.06.48-.06.13 0 .27.01.4.04.14.02.27.06.4.11.13.05.25.12.36.2.11.08.2.17.28.28V11a3.9 3.9 0 00-.87-.24 6.05 6.05 0 00-1.08-.09c-.41 0-.8.05-1.17.14a2.8 2.8 0 00-.96.43c-.27.19-.49.44-.65.74-.16.3-.24.67-.24 1.09 0 .53.15.98.45 1.35.3.37.76.68 1.38.93l.87.37c.23.1.42.2.57.3.15.1.27.21.35.33.08.12.12.26.12.43 0 .13-.02.25-.08.36a.71.71 0 01-.22.28c-.1.08-.22.14-.37.18-.15.04-.32.06-.52.06-.36 0-.71-.07-1.05-.2a3.2 3.2 0 01-.91-.59zM10.5 11.25H13V10H7v1.25h2.5V18h1V11.25z"
          fill="white"
        />
      </svg>
    </Icon>
  ),

  JavaScript: (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect width="24" height="24" rx="2" fill="#F7DF1E" fillOpacity="0.15" />
        <rect
          width="24"
          height="24"
          rx="2"
          stroke="#F7DF1E"
          strokeOpacity="0.4"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M7.5 15.8c.2.4.6.7 1.1.7.5 0 .8-.2.8-.6 0-.4-.3-.6-.9-.8l-.3-.1c-.9-.3-1.4-.8-1.4-1.8 0-1 .8-1.8 2-1.8.8 0 1.4.3 1.8.9l-.8.7c-.2-.3-.5-.5-.9-.5-.4 0-.6.2-.6.5 0 .3.2.5.8.7l.3.1c1 .4 1.5.9 1.5 1.9 0 1.1-.8 1.8-2.1 1.8-.9 0-1.7-.4-2.1-1.2l.8-.5zM13.5 11.5v3.8c0 1.1-.6 1.8-1.6 1.8-.5 0-.9-.2-1.2-.4l.5-.8c.2.2.4.3.7.3.4 0 .6-.2.6-.7v-4.1h1z"
          fill="#F7DF1E"
          fillOpacity="0.75"
        />
      </svg>
    </Icon>
  ),

  SQL: (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="12"
          cy="6"
          rx="7"
          ry="2.5"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </Icon>
  ),

  // ── Frameworks ──────────────────────────────────────────────
  "Next.js": (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="11"
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.2"
        />
        <path
          d="M9.5 8l7 8.5H14.5l-4.5-5.5V16H8.5V8H9.5zM14.5 8H16v5l-1.5-1.8V8z"
          fill="currentColor"
          fillOpacity="0.8"
        />
      </svg>
    </Icon>
  ),

  React: (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          strokeOpacity="0.6"
          strokeWidth="1.2"
          fill="none"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          strokeOpacity="0.6"
          strokeWidth="1.2"
          fill="none"
          transform="rotate(-60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          strokeOpacity="0.6"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" fillOpacity="0.75" />
      </svg>
    </Icon>
  ),

  "Node.js": (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2L3 7v10l9 5 9-5V7L12 2z"
          stroke="#339933"
          strokeOpacity="0.65"
          strokeWidth="1.4"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M12 2v20M3 7l9 5 9-5"
          stroke="#339933"
          strokeOpacity="0.3"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </Icon>
  ),

  Express: (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 8.5h10"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M5 12h14"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M5 15.5h10"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  ),
  Prisma: (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        {/* Prisma logo: tall triangle with inner line */}
        <path
          d="M5 21L12 3l9 16.5-16-4.5z"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.4"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M12 3l2 13.5"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  ),

  // ── Tools ────────────────────────────────────────────────────
  Neovim: (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 3l4 18L12 12l3.5 9L20 3"
          stroke="#57A143"
          strokeOpacity="0.75"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </Icon>
  ),

  Git: (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M22.5 11.3L12.7 1.5a1 1 0 00-1.4 0L9 3.8l2.9 2.9a1.2 1.2 0 011.5 1.5l2.8 2.8a1.2 1.2 0 01.8 2.1 1.2 1.2 0 01-1.6-1.8l-2.6-2.6v6.8a1.2 1.2 0 01.3 2.2 1.2 1.2 0 11-1.5-1.9V9.4a1.2 1.2 0 01-.7-1.6L8.1 4.9 1.5 11.5a1 1 0 000 1.4l9.8 9.8a1 1 0 001.4 0L22.5 12.7a1 1 0 000-1.4z"
          fill="#F05032"
          fillOpacity="0.75"
        />
      </svg>
    </Icon>
  ),

  Docker: (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M13.5 9H15v1.5h-1.5V9zM11.5 9H13v1.5h-1.5V9zM9.5 9H11v1.5H9.5V9zM11.5 7H13v1.5h-1.5V7zM13.5 7H15v1.5h-1.5V7z"
          fill="#2496ED"
          fillOpacity="0.8"
        />
        <path
          d="M21 11.2c-.5-.3-1.6-.4-2.4-.3-.1-.8-.5-1.5-1.2-2l-.4-.3-.3.4c-.4.5-.5 1.3-.5 1.9 0 .3.1.6.2.9-.3.1-.6.2-.9.2H3.2c-.2 1.1.1 2.5.8 3.5.7 1 1.8 1.6 3.2 1.6 3 0 5.2-1.4 6.3-3.9.7 0 2.2 0 3-1.4 0 0 0-.1.1-.2l.1-.3-.7-.1z"
          fill="#2496ED"
          fillOpacity="0.8"
        />
      </svg>
    </Icon>
  ),

  Linux: (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2C8.7 2 6 7 6 10.5c0 1.5.4 2.8 1 3.8-.3 1-.4 2.1-.2 3C7.2 19 8.5 20 9.8 20c.6 0 1.2-.2 1.7-.5.3.1.6.2 1 .2.3 0 .6-.1.9-.2.5.3 1 .5 1.6.5 1.3 0 2.6-1 3-2.7.2-.8.1-2-.2-3 .6-1 1-2.3 1-3.8C18.8 7 16.3 2 12 2z"
          fill="currentColor"
          fillOpacity="0.55"
        />
        <circle cx="10" cy="10.5" r="1" fill="var(--bg-base)" />
        <circle cx="14" cy="10.5" r="1" fill="var(--bg-base)" />
      </svg>
    </Icon>
  ),

  // ── Infrastructure ───────────────────────────────────────────
  PostgreSQL: (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="12"
          cy="7"
          rx="7"
          ry="3.5"
          stroke="#336791"
          strokeOpacity="0.75"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M5 7v10c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5V7"
          stroke="#336791"
          strokeOpacity="0.75"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M5 12c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5"
          stroke="#336791"
          strokeOpacity="0.4"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </Icon>
  ),

  Vercel: (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3L22.5 21H1.5L12 3z"
          fill="currentColor"
          fillOpacity="0.65"
        />
      </svg>
    </Icon>
  ),

  Tailwind: (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6.5 9.5C7.2 6.8 8.8 5.5 11.5 5.5c4 0 4.5 3 6.5 3.5 1.4.4 2.5-.2 3-.5-1 3-2.8 4.5-5.5 4.5-4 0-4.5-3-6.5-3.5-1.4-.4-2.3.2-2.5.5z"
          fill="#38BDF8"
          fillOpacity="0.5"
        />
        <path
          d="M2 15c.7-2.7 2.3-4 5-4 4 0 4.5 3 6.5 3.5 1.4.4 2.5-.2 3-.5-1 2.7-2.8 4-5.5 4-4 0-4.5-3-6.5-3.5-1.4-.4-2.3.2-2.5.5z"
          fill="#38BDF8"
          fillOpacity="0.5"
        />
      </svg>
    </Icon>
  ),
};

export function Stack() {
  const { t } = useLang();
  return (
    <Section id="stack" label={t.sections.stack}>
      <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-0">
        {stack.map((category, ci) => (
          <div
            key={category.label}
            className="sm:flex-1"
            style={{
              paddingLeft: ci === 0 ? 0 : "1.75rem",
              paddingRight: ci === stack.length - 1 ? 0 : "1.75rem",
              borderLeft: ci === 0 ? "none" : "1px solid var(--border)",
            }}
          >
            <p
              className="text-[11px] font-mono uppercase tracking-[0.12em] mb-4"
              style={{ color: "var(--text-label)" }}
            >
              {category.label}
            </p>
            <ul className="space-y-2.5">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm leading-none"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {icons[item]}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
