module.exports = {
  siteUrl: "https://otter-log.world",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://otter-log.world/server-sitemap.xml"],
  },
};
