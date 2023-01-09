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
      "test.artfi.world",
    ],
  },
};

module.exports = nextConfig;
