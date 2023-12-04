/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
    ],
  },
};

module.exports = nextConfig;
