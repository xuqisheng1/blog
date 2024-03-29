const nav = require("./nav");
const sidebar = require("./sidebar");

module.exports = {
  title: "好记性不如烂笔头",
  base: "/blog/",
  dest: "dist",
  description: "Just playing around",
  themeConfig: {
    sidebarDepth: 2,
    nav,
    sidebar,
    lastUpdated: "最后更新时间",
    docsDir: "docs",
    repo: "https://xuqisheng1.github.io/blog/",
  },
  extraWatchFiles: ["./nav.js", "./sidebar.js"],
  markdown: {
    lineNumbers: true,
  },
};
