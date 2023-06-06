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
            link: '/api-examples'
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
                text: 'Webpack',
                link: '/Webpack'
              }
            ]
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
