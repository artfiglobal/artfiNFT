/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "localhost",
      // "localhost:4200/upload/offering/imageOfArtWork-1671902172427-hackers.jpg",
      "test.artfi.world",
      // "test.artfi.world/api/upload/offering/imageOfArtWork-1671902172427-hackers.jpg",
    ],
  },
};

module.exports = nextConfig;
