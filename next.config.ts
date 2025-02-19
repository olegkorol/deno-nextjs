import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => { // This is needed for Deno KV to work
    config.externals = [...(config.externals || []), /\.node$/]
    return config
  }
};

export default nextConfig;
