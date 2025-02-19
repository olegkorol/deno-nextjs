import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Add node-loader for .node files (this is needed for Deno KV to work)
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader'
    })
    
    return config
  }
};

export default nextConfig;
