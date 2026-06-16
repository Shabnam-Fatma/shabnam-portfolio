import { Nav } from "@/components/nav";
import { BentoHero } from "@/components/bento-hero";
import { Projects } from "@/components/projects";
import { MaarifDemo } from "@/components/maarif-demo";
import { Path } from "@/components/path";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <BentoHero />
        <Projects />
        <MaarifDemo />
        <Path />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
