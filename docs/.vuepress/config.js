const { copyCode } = require("vuepress-plugin-copy-code2");

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
      copyCode({
        showInMobile: 'true',
      }),
      [
        '@vuepress/docsearch',
        {
          appId: T1OMYI5FZK,
          apiKey: '09375faf15c896174f69695819926e63',
          indexName: 'netlify_d01ed388-547b-4cd7-8dca-0b0b6e79b6fd_main_all',
          locales: {
            '/': {
              placeholder: '搜索文档',
              translations: {
                button: {
                  buttonText: '搜索文档',
                },
              },
            },
          },
        },
      ],
    ],
  }
