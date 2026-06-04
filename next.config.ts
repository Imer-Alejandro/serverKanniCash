import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // @ts-expect-error
  turbopack: {
    root: '.',
  },
};

export default nextConfig;
