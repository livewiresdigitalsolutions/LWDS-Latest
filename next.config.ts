import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: [],
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|webp|gif|ico|svg)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
