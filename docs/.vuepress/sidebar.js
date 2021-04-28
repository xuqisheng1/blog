// const networking_protocol = [
//   {
//     title: "HTTP协议",
//     collapsable: false,
//     children: ["http"],
//   },
// ];

const algorithm = [
  {
    title: "基本算法",
    collapsable: false,
    children: [
      "leetcode/struct",
      "leetcode/sort",
      "leetcode/traverse",
      "leetcode/tree",
      "leetcode/LRU",
      "leetcode/large_file",
      "leetcode/other",
    ],
  },
  {
    title: "leetcode",
    collapsable: false,
    children: ["leetcode/leetcode"],
  },
];

const design_pattern = [
  {
    title: "设计模式",
    collapsable: false,
    children: ["patterns"],
  },
];

const problems = [
  {
    title: "前端面试题",
    collapsable: true,
    children: ["frontend/html"],
  },
];

const ideas = [
  {
    title: "前端开发工具",
    collapsable: false,
    children: ["tools/drag-generate-web"],
  },
];

module.exports = {
  // "/networking-protocol/": networking_protocol,
  "/algorithm/": algorithm,
  "/design-pattern/": design_pattern,
  "/problems/": problems,
  "/ideas/": ideas,
};
