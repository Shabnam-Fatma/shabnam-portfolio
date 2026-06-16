export function Footer() {
  return (
    <footer className="container flex flex-wrap items-center justify-between gap-3 py-8">
      <span className="font-mono text-[12px] text-ink-soft">© {new Date().getFullYear()} Shabnam Fatma</span>
      <span className="font-mono text-[12px] text-ink-soft">Built with Next.js · Tailwind · shadcn/ui</span>
    </footer>
  );
}
