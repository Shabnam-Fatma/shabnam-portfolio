"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { id: "work", label: "Work" },
  { id: "demo", label: "Demo" },
  { id: "path", label: "Path" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-canvas/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="text-[17px] font-extrabold tracking-tight">
          shabnam<span className="text-grape">.</span>dev
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener" className={cn(buttonVariants({ size: "sm" }))}>
            Resume ↗
          </a>
        </div>
        <button className="p-1.5 md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="container flex flex-col gap-1 pb-3 md:hidden">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="rounded-xl bg-white px-4 py-3 font-semibold text-ink-soft">
              {l.label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener" className="rounded-xl bg-grape px-4 py-3 font-semibold text-white">
            Resume ↗
          </a>
        </div>
      )}
    </header>
  );
}
