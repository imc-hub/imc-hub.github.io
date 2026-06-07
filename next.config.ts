import type { NextConfig } from "next";

const repoName = process.env.REPO_NAME || "";

// For *.github.io repos, Pages serves from root — no basePath needed.
// For project repos (e.g. username.github.io/repo), we need basePath.
const isGithubIo = repoName.endsWith(".github.io");
const basePath = repoName && !isGithubIo ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? { basePath, assetPrefix: `${basePath}/` }
    : {}),
};

export default nextConfig;
