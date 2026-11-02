import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain static site: `npm run build` writes everything to out/.
  // (cacheComponents / partialPrefetching from the template are incompatible with export.)
  output: "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
