import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Moon Blog",
  description: "关于MuteMoon的任何事",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '心法', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '心法',
        items: [
          {
            text: '一句话心法',
            link: '/Learn/Smart/OneShot'
          },
          {
            text: '思维方法',
            link: '/markdown-examples'
          },
        ]
      },
      {
        text: '形象管理',
        items: [
          {
            text: '皮肤管理',
            link: '/SkinCare',
          },
          {
            text: '化妆',
            link: '/MakeUp',
          },
          {
            text: '拍照',
            link: '/Photograph'
          },
        ]
      },
      {
        text: '前端',
        items: [
          {
            text: '工程化', items: [
              {
                text: '模块化',
                link: '/JSModule.md'
              },
              {
                text: 'Webpack',
                link: '/Webpack'
              },
            ]
          },
          {
            text: '协议', items: [
              {
                text: 'HTTP协议',
                link: '/HTTP.md'
              },
            ]
          },
          {
            text: 'Vue', items: [
              {
                text: 'Vue3源码解析',
                link: '/VueSource.md'
              },
            ]
          },
        ]
      },
      {
        text: '韩语',
        items: [
          {
            text: '字音', link: '/KoreanWordAudio.md'
          },
          // {
          //   text: '字音', items: [
          //     {
          //       text: 'Webpack',
          //       link: '/Webpack'
          //     }
          //   ]
          // },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
