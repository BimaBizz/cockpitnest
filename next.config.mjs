/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'nest.bmdev.web.id',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
