import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // @ts-ignore
  turbopack: {
    root: '.',
  },
};

export default nextConfig;
