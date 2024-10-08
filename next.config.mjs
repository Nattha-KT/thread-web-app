/** @type {import('next').NextConfig} */

const allowedOrigins =
  process.env.NEXT_PUBLIC_ALLOWED_ORIGINS?.split(',') || [];

const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins,
    },
    serverComponentsExternalPackages: ['mongoose'],
    // instrumentationHook: true,  // --> It will allow you to execute any startup script and this runs only once when the nextjs server starts.
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'images.clerk.dev',
      },
      {
        protocol: 'https',
        hostname: 'uploadthing.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    domains: ['utfs.io'],
  },
};

export default nextConfig;
