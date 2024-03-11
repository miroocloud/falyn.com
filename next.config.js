/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    version: require("./package.json").version,
    next_version: require("./package.json").dependencies.next,
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
