/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'admin.bizzcode.tech',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
