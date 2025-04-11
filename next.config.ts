import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'komarev.com', 'img.shields.io'],
    unoptimized: true,
  },
};

export default nextConfig;
