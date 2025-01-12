/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '',
            pathname: '/cockpit-new/storage/**',
          },
        ],
      },
};

export default nextConfig;
