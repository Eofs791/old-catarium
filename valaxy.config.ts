import type { UserThemeConfig } from 'valaxy-theme-yun'
import { $t, defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'
import { addonMeting } from 'valaxy-addon-meting'
import { addonBangumi } from 'valaxy-addon-bangumi'


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

    bg_image: {
      enable: true,
      url: 'https://cdn.jsdelivr.net/gh/Eofs791/catpic@main/img/bg2.jpg',
      opacity: 0.2,
    },

    fireworks: {
      enable: true,
      colors: ['#FFC1CC', '#F48CA9', '#E06C8C']
    },

    banner: {
      enable: true,
      title: '见崎的猫箱',
    },

    pages: [
      {
        name: $t('themeConfig.nav.websites'),
        url: '/websites/',
        icon: 'i-ri-window-line',
      },
      {
        name: $t('themeConfig.nav.friends'),
        url: '/friends/',
        icon: 'i-ri-links-fill',
      },
    ],

    nav: [
      {
        text: $t('themeConfig.nav.archives'),
        link: '/archives/',
        icon: 'i-ri-folder-history-line',
      },
      {
        text: $t('themeConfig.nav.categories'),
        link: '/categories/',
        icon: 'i-ri-archive-drawer-line',
      },
      {
        text: $t('themeConfig.nav.tags'),
        link: '/tags/',
        icon: 'i-ri-price-tag-3-line',
      },
      {
        text: $t('themeConfig.nav.websites'),
        link: '/websites/',
        icon: 'i-ri-window-line',
      },
      {
        text: $t('themeConfig.nav.friends'),
        link: '/friends/',
        icon: 'i-ri-links-fill',
      },
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
    addonMeting({
      global: true,
      props: {
        id: "2754304984",
        server: "netease",
        type: "song",
        theme: "#F5A9B8",
        loop: "one",
      },
      options: {
        lyricHidden: true,
      },
    }),
    addonBangumi({
      api: 'https://yi_xiao_jiu-bangumi.web.val.run',
      bgmUid: 'eofs',
      bgmEnabled: true,
      bilibiliEnabled: false,
    }),
  ],
})


