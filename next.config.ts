import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES_BUILD === "true";

const nextConfig: NextConfig = {
  output: isGitHubPagesBuild ? "export" : undefined,
  trailingSlash: isGitHubPagesBuild,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
