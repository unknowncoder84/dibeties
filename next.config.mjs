/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Set custom port
  env: {
    PORT: '4008',
  },
}

export default nextConfig
