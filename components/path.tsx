"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { experience, education } from "@/data/site";

function ExperienceCard({ job }: { job: (typeof experience)[number] }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="tile bg-white">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <div>
          <span className="klabel text-grape">// {job.date}</span>
          <h3 className="mt-2 text-[20px] font-extrabold tracking-tight">{job.role}</h3>
          <p className="text-[14px] font-semibold text-ink-soft">{job.org}</p>
        </div>
        <span className={`mt-1 shrink-0 rounded-full bg-canvas p-2 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <ChevronDown size={16} />
        </span>
      </button>

      <p className="mt-3 text-[14px] text-ink-soft">{job.summary}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-3 border-t border-border pt-4">
              {job.highlights.map((h) => (
                <div key={h.title} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-grape" />
                  <p className="text-[14px] text-ink-soft">
                    <span className="font-bold text-ink">{h.title}.</span> {h.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((tname) => (
                <span key={tname} className="rounded-full bg-canvas px-2.5 py-1 font-mono text-[11.5px] font-medium text-ink-soft">
                  {tname}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Path() {
  return (
    <section id="path" className="container py-20">
      <SectionHead eyebrow="Path" title="Experience & education." sub="Tap a card to see the detail." />
      <div className="grid items-start gap-3.5 md:grid-cols-2">
        {experience.map((job) => (
          <Reveal key={job.role}>
            <ExperienceCard job={job} />
          </Reveal>
        ))}
        <Reveal delay={0.08}>
          <div className="tile tile-hover h-full bg-white">
            <span className="klabel text-grape">// {education.when}</span>
            <h3 className="mt-2 text-[20px] font-extrabold tracking-tight">{education.degree}</h3>
            <p className="text-[14px] font-semibold text-ink-soft">{education.school}</p>
            <p className="mt-3 text-[14px] text-ink-soft">
              A mathematics background brings strong analytical thinking and problem-solving to engineering — useful for everything from algorithms to data work.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Problem solving", "Logic", "Analytical thinking"].map((s) => (
                <span key={s} className="rounded-full bg-canvas px-2.5 py-1 font-mono text-[11.5px] font-medium text-ink-soft">{s}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
