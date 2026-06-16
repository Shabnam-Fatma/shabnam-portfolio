"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "@/components/section-head";
import { projects, profile, type Project } from "@/data/site";

const accents = ["bg-lav", "bg-sky", "bg-mint", "bg-peach"];
const accentInk = ["text-lav-ink", "text-sky-ink", "text-mint-ink", "text-peach-ink"];

const filters = ["All", "AI", "React", "JavaScript", "TypeScript"] as const;
type Filter = (typeof filters)[number];

function matches(p: Project, f: Filter) {
  if (f === "All") return true;
  if (f === "AI") return p.tags.some((t) => ["Groq", "Llama"].includes(t));
  return p.tags.includes(f);
}

function Tile({ p, i }: { p: Project; i: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 18 });
  const ink = accentInk[i % accentInk.length];
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      ref={ref}
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      className={`tile flex flex-col ${accents[i % accents.length]}`}
    >
      <span className={`klabel ${ink} mb-3 opacity-70`}>// {p.kind}</span>
      <h3 className={`text-[20px] font-extrabold tracking-tight ${ink}`}>{p.title}</h3>
      <p className={`mb-4 mt-2 flex-1 text-[14px] ${ink} opacity-90`}>{p.desc}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className={`rounded-full bg-white/70 px-2.5 py-1 font-mono text-[11.5px] font-medium ${ink}`}>{t}</span>
        ))}
      </div>
      <div className="flex gap-4">
        {p.links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener" className={`group inline-flex items-center gap-1.5 font-mono text-[13px] font-medium ${ink}`}>
            {l.label}
            <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ))}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const shown = projects.filter((p) => matches(p, active));
  return (
    <section id="work" className="container py-20">
      <SectionHead eyebrow="Selected work" title="Things I've built." sub="Filter by tech, or browse it all on GitHub." />

      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 font-mono text-[13px] font-medium transition-colors ${
              active === f ? "bg-grape text-white" : "bg-white text-ink-soft hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-3.5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <Tile key={p.title} p={p} i={projects.indexOf(p)} />
          ))}
        </AnimatePresence>

        <motion.a
          layout
          href={profile.socials.github}
          target="_blank"
          rel="noopener"
          className="tile tile-hover col-span-1 flex flex-col justify-center bg-ink text-white md:col-span-2"
        >
          <span className="klabel text-white/55">// more</span>
          <h3 className="mt-2 text-[19px] font-extrabold">50+ repositories on GitHub</h3>
          <p className="mt-1.5 text-[14px] text-white/75">Games, web apps, API experiments and coursework — all in the open.</p>
          <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[13px] text-[#A6F0C6]">Browse GitHub <ArrowUpRight size={13} /></span>
        </motion.a>
      </motion.div>
    </section>
  );
}
