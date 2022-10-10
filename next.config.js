const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["velog.velcdn.com", "images.velog.io"],
  },
  concurrentFeatures: true,
  async rewrites() {
    return [
      {
        source: "/re/:path*",
        destination: "https://api.notion.com/v1/search/:path*",
      },
    ];
  },
};
module.exports = withContentlayer(nextConfig);

// Access to fetch at 'https://api.notion.com/v1/search/' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
