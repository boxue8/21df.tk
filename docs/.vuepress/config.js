module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '爱分享',
    description: '写代码是热爱，写到世界充满爱',
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      sidebar: [
          '/',
          '/html/1.md',
          '/html/2.md',
          '/html/3.md',
          '/html/4.md',
          '/html/5.md',
      ],
      contributorsText: '贡献者',
      lastUpdatedText: '上次更新',
      selector: ':not(a) > img',
    },
    plugins: [
      [
        '@vuepress/plugin-search',
        {
          locales: {
            '/': {
              placeholder: '搜索',
            },
          },
        },
      ],
    ],
  }
