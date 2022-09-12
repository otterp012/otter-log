const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["velog.velcdn.com", "images.velog.io"],
  },
};
module.exports = withContentlayer(nextConfig);
