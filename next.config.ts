import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  // allowedDevOrigins: ['0.0.0.0'],

  // Enable static HTML export for GitHub Pages
  output: 'export',

  // Disable Next.js server-side image optimization
  images: {
    unoptimized: true,
  },

  // Configure pageExtensions to include md and mdx
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here if needed (e.g., remarkGfm)
});

export default withMDX(nextConfig);
