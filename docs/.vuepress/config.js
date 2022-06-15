// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
// 站点配置
module.exports = {
  shouldPrefetch: false,
  head: [['link', { rel: 'stylesheet', href: '/iconfont/iconfont.css' }]],
  // 站点语言
  lang: 'zh-CN',
  // 站点标题
  title: '爱分享',
  // 站点描述
  description: '写代码是热爱，写到世界充满爱',
  // 主题配置
  theme: hopeTheme({
    // 主题颜色
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },
    // 全屏按钮
    fullscreen: true,
    // 显示页脚
    displayFooter: true,
    // 页脚内容
    footer: "Copyright © 2021-2022 爱分享",
    // 导航栏菜单
    navbar: [
      {
        text: '首页',
        link: '/',
        icon: 'iconfont icon-shouye',
      },
      {
        text: '课本扫描件',
        link: 'https://45q2g4d2eg.k.topthink.com/@html/1.html',
        icon: 'iconfont icon-saomiao',
      },
      {
        text: '效果源码',
        link: 'https://gitlab.com/daanzs/html',
        icon: 'iconfont icon-yuandaima',
      },
      {
        text: '效果预览',
        link: 'https://html.21df.tk/',
        icon: 'iconfont icon-yulan',
      },
      {
        text: '重点内容下载',
        link: 'https://xieshibo.lanzouu.com/ig48l06gconc',
        icon: 'iconfont icon-zhongdianxiangmu',
      },
      {
        text: '全部案例下载',
        link: 'https://xieshibo.lanzouu.com/ire5f06gbzwb',
        icon: 'iconfont icon-yunduanxiazai',
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
      '/html/7.md',
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
        provider: "Twikoo",
        envId: "https://comment.21df.tk/",
      },
      sitemap: {
        hostname: 'https://www.21df.tk',
      },
      pwa: {

      },
      mdEnhance: {
        // 添加选项卡支持
        tabs: true,
      },
    },
  }),
  plugins: [
    // docsearch搜索
    docsearchPlugin({
      appId: 'QDVRVA5V1Q',
      apiKey: '2e8d1dad53f5b2fd3799157e324a0f09',
      indexName: '21df',
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                openIssueText: "你认为该查询应该有结果？",
                openIssueLinkText: "点击反馈",
              },
            },
          },
        },
      }
    }),
  ],
};
