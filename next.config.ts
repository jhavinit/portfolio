import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: process.env.STATIC_EXPORT === "true" ? "export" : undefined,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: process.env.STATIC_EXPORT === "true",
  },
};

export default nextConfig;
