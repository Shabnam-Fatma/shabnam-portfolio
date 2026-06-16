import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shabnam Fatma — Frontend & Full-Stack Developer",
  description:
    "Shabnam Fatma builds modern web apps with React, Next.js, TypeScript and AI integration. Sambalpur, India.",
  openGraph: {
    title: "Shabnam Fatma — Frontend & Full-Stack Developer",
    description: "Modern web apps with intelligence baked in. React · Next.js · TypeScript · AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
