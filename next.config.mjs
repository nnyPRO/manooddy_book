/** @type {import('next').NextConfig} */
const nextConfig = {
  // Define environment variables
  env: {
    MONGO: process.env.MONGO,
  },

  // Add webpack configuration
  webpack: (config) => {
    return config;
  },
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"],
  },
};

export default nextConfig;
