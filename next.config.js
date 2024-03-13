const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    version: require("./package.json").version,
    next_version: require("./package.json").dependencies.next,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["@"] = path.join(__dirname, "./src");
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/datum/cf_insights/b.js",
        destination: "https://static.cloudflareinsights.com/beacon.min.js",
      },
    ];
  },
};

module.exports = nextConfig;
