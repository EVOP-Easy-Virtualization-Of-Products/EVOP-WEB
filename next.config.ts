import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['dicoding-assets.sgp1.cdn.digitaloceanspaces.com','pengadaan.penerbitdeepublish.com','images.unsplash.com', 'komarev.com', 'img.shields.io'],
    unoptimized: true,
  },
};

export default nextConfig;
