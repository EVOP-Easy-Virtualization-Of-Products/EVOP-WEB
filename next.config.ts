import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'dev-to-uploads.s3.amazonaws.com','dev-to-uploads.s3.amazonaws.com','amazonaws.com','worldsavior.me','worldsavior.icu'], // Add your Firebase Storage domain
  },

  /* config options here */
};

export default nextConfig;
