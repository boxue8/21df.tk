// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
// 站点配置
module.exports = {
  head: [['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3376797_ykbav7d1di.css' }]],
  // 站点语言
  lang: 'zh-CN',
  // 站点标题
  title: '爱分享',
  // 站点描述
  description: '写代码是热爱，写到世界充满爱',
  // 主题配置
  theme: hopeTheme({
    // 显示页脚
    displayFooter: true,
    // 页脚内容
    footer: "Copyright © 2021-2022 爱分享",
    // 导航栏菜单
    navbar: [
      {
        text: '首页',
        link: '/',
        icon: 'icon-shouye',
      },
    ],
    // 侧边栏配置
    sidebar: [
      '/',
      '/html/1.md',
      '/html/2.md',
      '/html/3.md',
      '/html/4.md',
      '/html/5.md',
      '/html/6.md',
    ],
    // Logo 图片
    logo: '/logo.svg',
    // 主题插件配置
    plugins: {
      // 启用代码复制插件
      copyCode: {
        showInMobile: true,
      },
      // 启用feed插件
      feed: {
        hostname: 'https://www.21df.tk',
        atom: true,
      },
      // 评论
      comment: {
        type: "twikoo",
        envId: "https://comment.21df.tk/",
      },
      sitemap: {
        hostname: 'https://www.21df.tk',
      },
    },
  }),
  plugins: [
    // docsearch搜索
    docsearchPlugin({
      appId: 'QDVRVA5V1Q',
      apiKey: '2e8d1dad53f5b2fd3799157e324a0f09',
      indexName: '21df',
    }),
  ],
};
