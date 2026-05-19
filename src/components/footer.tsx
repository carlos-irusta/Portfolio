import { personal } from "@/lib/data";

export function Footer() {
  return (
    <footer
      className="w-full max-w-3xl mx-auto px-6 sm:px-8 py-7"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div
        className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase"
        style={{ color: "var(--text-tertiary)", opacity: 0.5 }}
      >
        <span>{personal.name.toLowerCase()}.dev</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
