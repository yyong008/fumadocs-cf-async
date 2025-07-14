import nextBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

const nextConfig: NextConfig = {
  transpilePackages: [],
  // serverExternalPackages: ["shiki"],
  serverExternalPackages: ["shiki/wasm"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
