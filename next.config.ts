import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // @ts-ignore
  turbopack: {
    root: '.',
  },
};

export default nextConfig;
