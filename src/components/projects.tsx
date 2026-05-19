"use client";

import Image from "next/image";
import { projects, type Project } from "@/lib/data";
import { useLang } from "@/lib/lang-context";
import { Section } from "./section";

function FeaturedPanel({ project }: { project: Project }) {
  const { t } = useLang();
  return (
    <div
      className="transition-colors duration-300"
      style={{ border: "1px solid var(--border)" }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)")}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
    >
      {/* Screenshot — shorter aspect ratio, less visually overwhelming */}
      {project.image && (
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: "3/1",
            background: "var(--bg-elevated)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <Image
            src={project.image}
            alt={`${project.name} — preview`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 720px"
            priority
          />
          {/* Dark overlay — calms screenshot's native contrast to match palette */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.18)", pointerEvents: "none" }}
          />
        </div>
      )}

      <div className="p-5">
        {/* Header row: name + status */}
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <h3
            className="text-base font-medium tracking-[-0.01em]"
            style={{ color: "var(--text-primary)" }}
          >
            {project.name}
          </h3>
          <span
            className="text-[10px] font-mono shrink-0 tracking-[0.08em] uppercase"
            style={{ color: "var(--text-tertiary)" }}
          >
            {project.status === "live" ? t.projects.live : t.projects.dev}
          </span>
        </div>

        {/* Primary description */}
        <p
          className="text-[0.9375rem] leading-[1.7] mb-3"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        {/* Long description — present but visually quiet */}
        {project.longDescription && (
          <p
            className="text-[13px] leading-[1.65] mb-4"
            style={{ color: "var(--text-tertiary)" }}
          >
            {project.longDescription}
          </p>
        )}

        {/* Footer row: stack / links */}
        <div
          className="flex items-center justify-between gap-4 pt-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono"
                style={{ color: "var(--text-tertiary)" }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-5 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono tracking-[0.04em] transition-colors duration-150"
                style={{ color: "var(--text-tertiary)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-tertiary)")}
              >
                Live ↗
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono tracking-[0.04em] transition-colors duration-150"
                style={{ color: "var(--text-tertiary)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-tertiary)")}
              >
                Source ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PlaceholderPanel({ project }: { project: Project }) {
  const { t } = useLang();
  return (
    <div
      className="p-5 flex flex-col gap-4 min-h-[96px]"
      style={{ border: "1px solid var(--border)", opacity: 0.55 }}
    >
      <span
        className="text-[10px] font-mono uppercase tracking-[0.1em]"
        style={{ color: "var(--text-tertiary)" }}
      >
        {t.projects.inDevelopment}
      </span>
      <span
        className="text-xs leading-relaxed mt-auto"
        style={{ color: "var(--text-tertiary)" }}
      >
        {project.description}
      </span>
    </div>
  );
}

export function Projects() {
  const { t } = useLang();
  const featured = projects.filter((p) => p.featured);
  const placeholders = projects.filter((p) => p.status === "coming-soon");

  return (
    <Section id="projects" label={t.sections.projects}>
      <div className="space-y-3">
        {featured.map((p) => (
          <FeaturedPanel key={p.id} project={p} />
        ))}
        {placeholders.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {placeholders.map((p) => (
              <PlaceholderPanel key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
