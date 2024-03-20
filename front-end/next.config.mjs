/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:8081/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/auth/oauth-response",
        destination: "http://localhost:3000/tarot",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
