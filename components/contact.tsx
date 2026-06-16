import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/site";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="container py-20">
      <Reveal>
        <div className="tile bg-grape px-6 py-14 text-center text-white md:px-10">
          <h2 className="mx-auto max-w-2xl text-[clamp(28px,5vw,44px)] font-extrabold leading-[1.08] tracking-tight">
            Let&apos;s build something together.
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-md text-[16px] text-grape-soft">
            Open to frontend and full-stack roles, and to interesting AI projects. Email is the fastest way to reach me.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className={cn(buttonVariants({ size: "lg" }), "bg-white text-grape hover:bg-white")}>
              {profile.email}
            </a>
            <a href={profile.socials.github} target="_blank" rel="noopener" className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "border-white/40 bg-transparent text-white hover:border-white")}>
              GitHub
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener" className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "border-white/40 bg-transparent text-white hover:border-white")}>
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
