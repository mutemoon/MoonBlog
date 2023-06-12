import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Moon Blog",
  description: "关于MuteMoon的任何事",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '学习', link: '/Learn/Smart/OneShot' },
      { text: '工具', link: '/Learn' }
    ],

    sidebar: {
      '/Learn': [
        {
          text: '心法',
          items: [
            {
              text: '一句话心法',
              link: '/Learn/Smart/OneShot'
            },
            {
              text: '思维方法',
              link: '/Learn/Smart/Method'
            },
          ]
        },
        {
          text: '形象管理',
          items: [
            {
              text: '皮肤管理',
              link: '/Learn/Image/SkinCare',
            },
            {
              text: '化妆',
              link: '/Learn/Image/MakeUp',
            },
            {
              text: '拍照',
              link: '/Learn/Image/Photograph'
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
                  link: '/Learn/FrontEnd/Engineering/JSModule'
                },
                {
                  text: 'Webpack',
                  link: '/Learn/FrontEnd/Engineering/Webpack'
                },
              ]
            },
            {
              text: '协议', items: [
                {
                  text: 'HTTP协议',
                  link: '/Learn/FrontEnd/Protocol/HTTP'
                },
              ]
            },
            {
              text: 'Vue', items: [
                {
                  text: 'Vue3源码解析',
                  link: '/Learn/FrontEnd/Vue/VueSource'
                },
              ]
            },
          ]
        },
        {
          text: '韩语',
          items: [
            {
              text: '字音', link: '/Learn/Korean/KoreanWordAudio.md'
            },
          ]
        },
        {
          text: '营销',
          items: [
            {
              text: '心法', link: '/Learn/Market/Smart'
            },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
