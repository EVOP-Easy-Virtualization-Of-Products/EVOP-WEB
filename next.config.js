/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['dicoding-assets.sgp1.cdn.digitaloceanspaces.com','pengadaan.penerbitdeepublish.com','images.unsplash.com','stackct.com', 'komarev.com', 'img.shields.io','blogger.googleusercontent.com','shalb.com'],
  },
}

module.exports = nextConfig
