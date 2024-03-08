const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    version: require("./package.json").version,
  },
};

module.exports = withContentlayer(nextConfig);
