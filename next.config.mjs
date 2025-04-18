/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'nest.bizzcode.tech',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
