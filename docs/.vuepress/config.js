const { sitemap } = require("vuepress-plugin-sitemap2");
const { defineHopeConfig } = require("vuepress-theme-hope");

module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '爱分享',
    description: '写代码是热爱，写到世界充满爱',
  
    head: [
      ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],

    // 主题和它的配置
    theme: 'hope',
    themeConfig: {
      sidebar: [
          '/',
          '/html/1.md',
          '/html/2.md',
          '/html/3.md',
          '/html/4.md',
          '/html/5.md',
      ],
      logo: '/images/icons/logo.svg',
      contributorsText: '贡献者',
      lastUpdatedText: '上次更新',
      plugins: {
        comment: {
          type: "twikoo",
          envId: "https://comment.21df.tk/",
        },
        pwa: {
          pwa: true,
        },
        feed: {
          hostname: 'https://www.21df.tk',
          atom: true,
        },
        copyCode: {
          showInMobile: true,
        },
      },
    },
    plugins: [
      sitemap({
        hostname: 'https://www.21df.tk',
      }),
      [
        '@vuepress/docsearch',
        {
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
          },
        },
      ],
    ],
  }
