import type { NextConfig } from "next";
import "./lib/env";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  output: "standalone"
};

export default nextConfig;
