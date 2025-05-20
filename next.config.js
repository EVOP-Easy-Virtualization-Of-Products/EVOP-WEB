/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['pengadaan.penerbitdeepublish.com','images.unsplash.com','stackct.com', 'komarev.com', 'img.shields.io','blogger.googleusercontent.com','shalb.com'],
  },
}

module.exports = nextConfig
