import type { NextConfig } from "next";

const repoName = process.env.REPO_NAME || "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(repoName && repoName !== "imc-hub.github.io" && !repoName.endsWith(".github.io")
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

export default nextConfig;
