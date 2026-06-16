"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { profile, skillGroups } from "@/data/site";

function useCountUp(target: number, run: boolean) {
  const [n, setN] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!run) return;
    if (reduce) {
      setN(target);
      return;
    }
    let v = 0;
    const id = setInterval(() => {
      v += Math.ceil(target / 28);
      if (v >= target) {
        v = target;
        clearInterval(id);
      }
      setN(v);
    }, 22);
    return () => clearInterval(id);
  }, [target, run, reduce]);
  return n;
}

function useIstClock() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const ist = new Date(now.getTime() + (now.getTimezoneOffset() + 330) * 60000);
      setTime(ist.toTimeString().slice(0, 5));
    };
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const allChips = skillGroups[0].items.slice(0, 6).concat(["Node.js", "Groq"]);

export function BentoHero() {
  const reduce = useReducedMotion();
  const repos = useCountUp(50, true);
  const clock = useIstClock();

  const grid = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };
  const cell = {
    hidden: reduce ? {} : { opacity: 0, y: 18, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const } },
  };

  return (
    <section id="home" className="container pt-6 pb-2">
      <motion.div
        variants={grid}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-3.5 md:grid-cols-4"
        style={{ gridAutoRows: "minmax(118px, auto)" }}
      >
        {/* INTRO */}
        <motion.div variants={cell} className="tile tile-hover col-span-2 flex flex-col bg-ink text-white md:row-span-2">
          <span className="klabel text-white/55">// frontend &amp; full-stack developer</span>
          <h1 className="mt-auto pt-6 text-[clamp(26px,3.6vw,38px)] font-extrabold leading-[1.05] tracking-tight">
            Modern web apps, with <span className="text-[#A6F0C6]">intelligence</span> baked in.
          </h1>
          <span className="mt-4 flex items-center gap-2 text-[13px] text-white/75">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A6F0C6]" />
            {profile.location} · open to roles
          </span>
        </motion.div>

        {/* REPOS */}
        <motion.div variants={cell} className="tile tile-hover col-span-1 flex flex-col justify-between bg-lav">
          <span className="klabel text-lav-ink/70">// github</span>
          <div>
            <div className="text-[34px] font-extrabold leading-none tracking-tight text-lav-ink">{repos}+</div>
            <div className="mt-1 text-[12px] font-semibold text-lav-ink/80">Public repos</div>
          </div>
        </motion.div>

        {/* CLOCK */}
        <motion.div variants={cell} className="tile tile-hover col-span-1 flex flex-col justify-between bg-peach">
          <span className="klabel text-peach-ink/70">// local time</span>
          <div>
            <div className="font-mono text-[26px] font-bold leading-none text-peach-ink">{clock}</div>
            <div className="mt-1 text-[12px] font-semibold text-peach-ink/80">IST · Sambalpur</div>
          </div>
        </motion.div>

        {/* NOW BUILDING */}
        <motion.div variants={cell} className="tile tile-hover col-span-2 flex flex-col justify-between bg-sky">
          <span className="klabel text-sky-ink/70">// now building</span>
          <div>
            <h3 className="text-[20px] font-bold text-sky-ink">Maarif — AI Chatbot</h3>
            <p className="mt-1 text-[13px] text-sky-ink/80">Node.js · TypeScript · Llama via Groq · streaming replies</p>
          </div>
        </motion.div>

        {/* STACK */}
        <motion.div variants={cell} className="tile tile-hover col-span-2 flex flex-col bg-mint">
          <span className="klabel mb-3 text-mint-ink/70">// stack</span>
          <div className="flex flex-wrap gap-2">
            {allChips.map((s) => (
              <span key={s} className="rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-mint-ink">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* DEGREE */}
        <motion.div variants={cell} className="tile tile-hover col-span-1 flex flex-col justify-between bg-butter">
          <span className="klabel text-butter-ink/70">// studying</span>
          <div>
            <h3 className="text-[15px] font-extrabold leading-tight text-butter-ink">BSc Mathematics</h3>
            <p className="mt-1 text-[12px] font-semibold text-butter-ink/80">Sambalpur University</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.a
          variants={cell}
          href="#contact"
          className="tile tile-hover col-span-1 flex flex-col justify-between bg-grape text-white"
        >
          <span className="klabel text-grape-soft">// say hi</span>
          <div className="flex items-end justify-between">
            <h3 className="text-[17px] font-extrabold">Let&apos;s talk</h3>
            <ArrowUpRight size={22} />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
