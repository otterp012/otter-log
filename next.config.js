const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["velog.velcdn.com"],
  },
};
module.exports = withContentlayer(nextConfig);
