"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Send } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";

type Msg = { from: "user" | "bot"; text: string };

const qa: { q: string; a: string }[] = [
  { q: "What is Maarif?", a: "Maarif is a command-line AI chatbot I built with Node.js and TypeScript. It talks to Llama models through the Groq API and streams replies straight into your terminal." },
  { q: "What tech did you use?", a: "Node.js, TypeScript and the Groq SDK for Llama inference. Prompts and conversation state are handled in plain TypeScript — no framework needed." },
  { q: "Why Groq?", a: "Groq's inference is fast, so tokens stream back almost instantly. That makes a terminal chatbot feel genuinely snappy to use." },
  { q: "Can I try it?", a: "The full code is on my GitHub (Shabnam-Fatma/cbot). This little box is a scripted preview — the real thing runs in your terminal." },
];

export function MaarifDemo() {
  const reduce = useReducedMotion();
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: "Hi! I'm Maarif. Tap a question below to see how I answer." }]);
  const [typing, setTyping] = useState(false);
  const [asked, setAsked] = useState<string[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
  }, [msgs, typing, reduce]);

  function ask(item: { q: string; a: string }) {
    if (typing) return;
    setAsked((a) => [...a, item.q]);
    setMsgs((m) => [...m, { from: "user", text: item.q }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { from: "bot", text: item.a }]);
    }, reduce ? 250 : 900);
  }

  const remaining = qa.filter((item) => !asked.includes(item.q));

  return (
    <section id="demo" className="container py-20">
      <SectionHead eyebrow="Try it" title="Ask Maarif." sub="A scripted preview of the AI chatbot I built — tap a question." />
      <Reveal>
        <div className="tile bg-white p-0">
          <div className="flex items-center gap-2 border-b border-border px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-grape animate-pulse-dot" />
            <span className="font-mono text-[13px] font-medium">maarif · groq · llama</span>
            <span className="ml-auto font-mono text-[11px] text-ink-soft">demo</span>
          </div>

          <div className="flex max-h-[300px] min-h-[220px] flex-col gap-3 overflow-y-auto p-5">
            <AnimatePresence initial={false}>
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[14px] ${
                    m.from === "user" ? "self-end bg-grape text-white" : "self-start bg-canvas text-ink"
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}
            </AnimatePresence>
            {typing && (
              <div className="self-start rounded-2xl bg-canvas px-4 py-3">
                <span className="flex gap-1">
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-ink-soft" style={{ animationDelay: "0ms" }} />
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-ink-soft" style={{ animationDelay: "150ms" }} />
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-ink-soft" style={{ animationDelay: "300ms" }} />
                </span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="flex flex-wrap gap-2 border-t border-border p-4">
            {remaining.length > 0 ? (
              remaining.map((item) => (
                <button
                  key={item.q}
                  onClick={() => ask(item)}
                  disabled={typing}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:border-grape hover:text-ink disabled:opacity-50"
                >
                  <Send size={12} /> {item.q}
                </button>
              ))
            ) : (
              <a
                href="https://github.com/Shabnam-Fatma/cbot"
                target="_blank"
                rel="noopener"
                className="rounded-full bg-grape px-4 py-2 text-[13px] font-medium text-white"
              >
                See the real code on GitHub ↗
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
