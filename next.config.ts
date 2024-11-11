/** @type {import('next').NextConfig} */
const path = require('path');


const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/billionheads/" : "",
  images: {
    loader: "imgix",
    path: isProd ? "https://richaad.github.io/billionheads/" : "",
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
