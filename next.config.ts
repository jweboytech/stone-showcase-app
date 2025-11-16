import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kind-life-8da2917f09.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
