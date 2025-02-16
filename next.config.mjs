/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'admin.bizzcode.tech',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
