/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site works on GitHub Pages with zero server.
  // (Also fine on Vercel.)
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // If you deploy to a PROJECT repo (e.g. github.com/siddiquah/portfolio),
  // uncomment and set these to "/portfolio". For a user site
  // (siddiquah.github.io) leave them commented out.
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio/",
};
export default nextConfig;
