// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
  // 站点语言
  lang: 'zh-CN',
  // 站点标题
  title: '爱分享',
  // 站点描述
  description: '写代码是热爱，写到世界充满爱',
  // 主题配置
  theme: hopeTheme({
    // 导航栏菜单
    navbar: [
      {
        text: '首页',
        link: '/',
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
    // 贡献者列表标签的文字
    contributorsText: '贡献者',
    // 最近更新时间戳标签的文字
    lastUpdatedText: '上次更新',
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
