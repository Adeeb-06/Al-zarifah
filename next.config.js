/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com'
        },
        {
          protocol: 'https',
          hostname: 'flowbite.s3.amazonaws.com'
        },
        {
          protocol: 'https',
          hostname: 'wembleypark.com'
        },
      ]
    }
  }
