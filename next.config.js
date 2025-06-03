/** @type {import('next').NextConfig} */
const isGithubPages = true;

const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/portfolio-main' : '',
  assetPrefix: isGithubPages ? '/portfolio-main/' : '',
};

module.exports = nextConfig;
