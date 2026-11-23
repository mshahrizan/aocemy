import type { NextConfig } from "next";

// Tailwind CSS runs through PostCSS (see postcss.config.mjs), the setup the
// Next.js docs recommend. Turbopack's built-in CSS pipeline picks it up, so no
// custom turbopack.rules are needed.
const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
