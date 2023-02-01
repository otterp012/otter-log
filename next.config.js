const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.us-west-2.amazonaws.com", "res.cloudinary.com"],
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
