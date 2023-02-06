const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.us-west-2.amazonaws.com", "res.cloudinary.com"],
    disableStaticImages: true,
  },
};
module.exports = withBundleAnalyzer(nextConfig);
