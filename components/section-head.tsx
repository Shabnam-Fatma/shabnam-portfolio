import { Reveal } from "@/components/reveal";

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-7 max-w-2xl">
      <span className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-grape">{eyebrow}</span>
      <h2 className="mt-2.5 text-[clamp(26px,4vw,38px)] font-extrabold leading-[1.1] tracking-tight">{title}</h2>
      {sub && <p className="mt-3 text-[16px] text-ink-soft">{sub}</p>}
    </Reveal>
  );
}
