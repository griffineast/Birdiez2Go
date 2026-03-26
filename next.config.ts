import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Birdiez2Go",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Birdiez2Go",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
