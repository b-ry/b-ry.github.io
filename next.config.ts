import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/b-ry.github.io',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
