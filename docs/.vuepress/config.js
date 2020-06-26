const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Pasiruošimas IT VBE (C++)',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    smoothScroll: true,
    lastUpdated: 'Paskutinį kartą atnaujinta',
    nav: [
      { text: 'Programavimas C++', link: '/programavimas-cpp/' },
      { text: 'Egzaminų užduotys', link: '/egzaminu-uzduotys/' },
    ],
    sidebar: {
      '/programavimas-cpp/': [
        {
          title: 'Programavimas C++',
          path: '/programavimas-cpp/',
          children: [
            '',
          ]
        },
        {
          title: 'Pradžiamokslis',
          path: '/programavimas-cpp/kodo-tvarkingumas/',
          children: [
            '/programavimas-cpp/kodo-tvarkingumas/',
            '/programavimas-cpp/kintamieji/',
            '/programavimas-cpp/informacijos-isvedimas-i-konsole/',
            '/programavimas-cpp/aritmetiniai-veiksmai/',
            '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/',
          ]
        },
        {
          title: 'Patikrinimo sąlygos',
          path: '/programavimas-cpp/patikrinimo-salyga-if/',
          children: [
            '/programavimas-cpp/patikrinimo-salyga-if/',
            '/programavimas-cpp/loginiai-patikrinimo-operatoriai/',
            '/programavimas-cpp/patikrinimo-salyga-switch/',
          ]
        },
        {
          title: 'Ciklai',
          path: '/programavimas-cpp/ciklai/',
          children: [
            '/programavimas-cpp/ciklai/',
            '/programavimas-cpp/ciklai/for/',
            '/programavimas-cpp/ciklai/while/',
            '/programavimas-cpp/ciklai/do-while/',
          ]
        },
        {
          title: 'Papildomos užduotys #1',
          path: '/programavimas-cpp/papildomos-uzduotys-1/',
          children: [
            '/programavimas-cpp/papildomos-uzduotys-1/',
          ]
        },
        {
          title: 'Masyvai',
          path: '/programavimas-cpp/masyvai/',
          children: [
            '/programavimas-cpp/masyvai/',
            '/programavimas-cpp/masyvai/vienmaciai-masyvai/',
            '/programavimas-cpp/masyvai/dvimaciai-masyvai/',
          ]
        },
        {
          title: 'Darbas su duomenų failais',
          path: '/programavimas-cpp/darbas-su-duomenu-failais/',
          children: [
            '/programavimas-cpp/darbas-su-duomenu-failais/'
          ]
        },
        {
          title: 'Funkcijos',
          path: '/programavimas-cpp/funkcijos/',
          children: [
            '/programavimas-cpp/funkcijos/',
            '/programavimas-cpp/funkcijos/paprastosios-funkcijos/',
            '/programavimas-cpp/funkcijos/funkcijos-su-argumentais/',
            '/programavimas-cpp/funkcijos/funkcijos-su-grazinimo-tipu/',
          ]
        },
        {
          title: 'Objektinis programavimas',
          path: '/programavimas-cpp/objektinis-programavimas/',
          children: [
            '/programavimas-cpp/objektinis-programavimas/',
          ]
        },
      ],
      '/egzaminu-uzduotys/': [
        {
          title: 'Egzaminų užduotys',
          path: '/egzaminu-uzduotys/',
          children: [
            '',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
