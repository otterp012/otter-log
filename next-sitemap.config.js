module.exports = {
  siteUrl: "https://example.com",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://otter-log.world/server-sitemap.xml"],
  },
};
