export const profile = {
  name: "Shabnam Fatma",
  role: "Frontend & Full-Stack Developer",
  location: "Sambalpur, India",
  email: "shabnamfatma.tech@gmail.com", // TODO: replace with your real email
  resume: "/Shabnam_Fatma_Resume.pdf",
  socials: {
    github: "https://github.com/Shabnam-Fatma",
    linkedin: "https://www.linkedin.com/in/shabnam-fatma-3767352b1/",
  },
};

export const skillGroups = [
  { no: "01", title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "shadcn/ui", "HTML5", "CSS3", "Bootstrap"] },
  { no: "02", title: "Backend & Data", items: ["Node.js", "REST APIs", "API integration"] },
  { no: "03", title: "AI / LLM", items: ["Groq", "Llama", "AI chatbots", "Prompt engineering"] },
  { no: "04", title: "Tools & Foundations", items: ["Git & GitHub", "Figma", "Problem solving", "Applied mathematics"] },
];

export type Project = {
  kind: string;
  title: string;
  desc: string;
  tags: string[];
  live?: boolean;
  links: { label: string; href: string }[];
  todo?: boolean;
};

export const projects: Project[] = [
  {
    kind: "AI · Command line",
    title: "Maarif — AI Chatbot",
    desc: "A command-line chatbot built with Node.js and TypeScript, integrating Llama models through the Groq API for fast, streaming responses.",
    tags: ["Node.js", "TypeScript", "Groq", "Llama"],
    links: [{ label: "Code", href: "https://github.com/Shabnam-Fatma/cbot" }],
  },
  {
    kind: "Web · API",
    title: "Dictionary App",
    desc: "A dictionary web app in HTML, CSS and JavaScript that fetches and displays word definitions from a REST API.",
    tags: ["JavaScript", "REST API", "CSS"],
    todo: true, // TODO: add the exact repo + live demo link
    links: [{ label: "Code", href: "https://github.com/Shabnam-Fatma" }],
  },
  {
    kind: "Web · React",
    title: "Memory Card Game",
    desc: "An interactive memory-matching game built in React, with card state, move tracking and win detection.",
    tags: ["React", "JavaScript"],
    todo: true, // TODO: add the exact repo + live demo link
    links: [{ label: "Code", href: "https://github.com/Shabnam-Fatma" }],
  },
  {
    kind: "Web · CRUD",
    title: "E-commerce Site",
    desc: "A shopping site in HTML, CSS and JavaScript demonstrating full create, read, update and delete flows.",
    tags: ["JavaScript", "HTML", "CSS"],
    todo: true, // TODO: add the exact repo + live demo link
    links: [{ label: "Code", href: "https://github.com/Shabnam-Fatma" }],
  },
];

export type Job = {
  date: string;
  role: string;
  org: string;
  summary: string;
  tech: string[];
  highlights: { title: string; text: string }[];
};

export const experience: Job[] = [
  {
    date: "6 months",
    role: "Software Development Intern",
    org: "Al-Noor Academy",
    summary: "Delivered real, in-use web projects while collaborating with a small development team.",
    tech: ["HTML", "CSS", "JavaScript", "Git"],
    highlights: [
      {
        title: "Academy website",
        text: "Designed and built the academy's multi-page website end to end — from requirements to a responsive, easy-to-navigate site.",
      },
      {
        title: "Student management app",
        text: "Worked with a team to build a web application for adding, searching, viewing and updating student records.",
      },
      {
        title: "Internal web projects",
        text: "Built and styled reusable UI components across several internal projects, using Git and GitHub for version control.",
      },
    ],
  },
];

export const education = {
  degree: "BSc Mathematics",
  school: "Sambalpur University",
  when: "Expected 2027",
};
