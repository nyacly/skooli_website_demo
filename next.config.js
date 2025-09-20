/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'data',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/investor-deck',
        destination: '/for-funders',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig