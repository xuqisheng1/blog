const networking_protocol = [
  {
    title: "概述",
    collapsable: false,
    children: ["summary"],
  },
  {
    title: "物理层",
    collapsable: false,
    children: ["physicallayer"],
  },
  {
    title: "链路层",
    collapsable: false,
    children: ["linklayer"],
  },
  {
    title: "网络层",
    collapsable: false,
    children: ["networklayer"],
  },
  {
    title: "传输层",
    collapsable: false,
    children: ["transportlayer"],
  },
  {
    title: "应用层",
    collapsable: false,
    children: ["applicationlayer"],
  },
];

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

const ios = [
  {
    title: "第三方库",
    collapsable: false,
    children: ["thirdparty"],
  },
  {
    title: "LLDB指令",
    collapsable: false,
    children: ["lldb"],
  },
];

const js_study = [
  {
    title: "其他",
    collapsable: false,
    children: ["other"],
  },
];

const problems = [
  {
    title: "前端面试题",
    collapsable: true,
    children: ["frontend/html"],
  },
];

module.exports = {
  "/networking-protocol/": networking_protocol,
  "/algorithm/": algorithm,
  "/design-pattern/": design_pattern,
  "/ios/": ios,
  "/js-study/": js_study,
  "/problems/": problems,
};
