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
          '/cs.md',
      ],
      contributorsText: '贡献者',
      lastUpdatedText: '上次更新',
    },
    plugins: [
      [
        '@vuepress/plugin-search',
        {
          getExtraFields: (page) => page.frontmatter.tags ?? [],
          locales: {
            '/': {
              placeholder: '搜索',
            },
          },
        },
      ],
    ],
  }