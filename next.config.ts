import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/Birdiez2Go" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/Birdiez2Go" : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
