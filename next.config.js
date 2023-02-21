const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.us-west-2.amazonaws.com", "res.cloudinary.com"],
    disableStaticImages: true,
    deviceSizes: [450, 768, 1080, 1200],
  },
};
module.exports = withBundleAnalyzer(nextConfig);
