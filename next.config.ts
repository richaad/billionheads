/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
      },
    ],
    domains: ["localhost", "*.googleusercontent.com", "drive.google.com", "lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
