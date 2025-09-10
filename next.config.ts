import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚀 disables ESLint checks during Vercel build
  },
};

export default nextConfig;
