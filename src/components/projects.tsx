"use client";

import Image from "next/image";
import { projects, type Project } from "@/lib/data";
import { Section } from "./section";

function FeaturedPanel({ project }: { project: Project }) {
  return (
    <div
      className="group transition-colors duration-300"
      style={{ border: "1px solid var(--border)" }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)")}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
    >
      {project.image && (
        <div
          className="relative w-full aspect-[16/9] overflow-hidden"
          style={{
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
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Header row */}
        <div className="flex items-baseline justify-between gap-4 mb-5">
          <h3
            className="text-sm font-medium tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {project.name}
          </h3>
          <span
            className="text-[10px] font-mono shrink-0"
            style={{ color: "var(--text-tertiary)" }}
          >
            {project.status === "live" ? "live" : "dev"}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm leading-[1.75] mb-5" style={{ color: "var(--text-secondary)" }}>
          {project.description}
        </p>

        {project.longDescription && (
          <p className="text-[13px] leading-[1.75] mb-5" style={{ color: "var(--text-tertiary)" }}>
            {project.longDescription}
          </p>
        )}

        {/* Footer row */}
        <div
          className="flex items-center justify-between gap-4 pt-5"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {project.stack.map((tech) => (
              <span key={tech} className="text-[10px] font-mono" style={{ color: "var(--text-tertiary)" }}>
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
                className="text-[10px] font-mono transition-colors duration-150"
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
                className="text-[10px] font-mono transition-colors duration-150"
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
  return (
    <div
      className="p-6 min-h-[120px] flex flex-col"
      style={{ border: "1px solid var(--border)", opacity: 0.5 }}
    >
      <span
        className="text-[10px] font-mono uppercase tracking-[0.16em]"
        style={{ color: "var(--text-tertiary)" }}
      >
        In development
      </span>
      <span
        className="text-xs mt-auto"
        style={{ color: "var(--text-tertiary)" }}
      >
        {project.description}
      </span>
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const placeholders = projects.filter((p) => p.status === "coming-soon");

  return (
    <Section id="projects" label="Work">
      <div className="space-y-4">
        {featured.map((p) => (
          <FeaturedPanel key={p.id} project={p} />
        ))}
        {placeholders.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {placeholders.map((p) => (
              <PlaceholderPanel key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
