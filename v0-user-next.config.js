/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  output: "export", // Change from 'standalone' to 'export' for static site generation
  trailingSlash: true,
  distDir: "out", // Specify the output directory
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [],
    optimizeCss: true,
    scrollRestoration: true,
  },
  poweredByHeader: false,
}

module.exports = nextConfig

