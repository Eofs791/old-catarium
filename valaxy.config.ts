import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    colors: {
      primary: '#F5A9B8',
    },

    banner: {
      enable: true,
      title: '见崎的猫箱',
    },

    pages: [
      {
        name: '',
        url: '/categories/',
        icon: 'i-ri-archive-line',
      },
      {
        name: '',
        url: '/tags/',
        icon: 'i-ri-price-tag-3-line',
      },
      {
        name: '',
        url: '/links/',
        icon: 'i-ri-links-fill',
        
      }
    ],

    nav: [
      {
        text: '归档',
        link: '/archives/',
        icon: 'i-ri-archive-line',
      },
      {
        text: '分类',
        link: '/categories/',
        icon: 'i-ri-folder-2-line',
      },
      {
        text: '标签',
        link: '/tags/',
        icon: 'i-ri-price-tag-3-line',
      },
      {
        text: '友联',
        link: '/links/',
        icon: 'i-ri-links-fill',
      },
      {
        text: '面基记录',
        link: "/offline/",
        icon: 'i-ri-shake-hands-line',
      },
      {
        text: '赛博灵堂',
        link: "/rip/",
        icon: 'i-ri-cross-line',
      }      
    ],

    footer: {
      since: 2025,
      powered: true
    },
  },

  unocss: { safelist },

  siteConfig: {
    comment: {
      enable: true
    },
  },
  addons: [
    addonWaline({
      serverURL: 'https://waline-blush-ten.vercel.app/',
    }),
  ],  
})


