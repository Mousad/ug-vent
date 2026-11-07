const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'instalpromet.rs',
        pathname: '/pdf/**',
      },
    ],
  },
}

export default nextConfig