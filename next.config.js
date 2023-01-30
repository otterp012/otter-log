const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.us-west-2.amazonaws.com"],
    disableStaticImages: true,
  },
};
module.exports = withContentlayer(nextConfig);
