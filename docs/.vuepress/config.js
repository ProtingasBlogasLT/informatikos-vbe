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
            'kodo-tvarkingumas/',
            'kintamieji/',
            'informacijos-isvedimas-i-konsole/',
            'aritmetiniai-veiksmai/',
            'informacijos-nuskaitymas-is-konsoles/',
            'patikrinimo-salyga-if/',
            'loginiai-patikrinimo-operatoriai/',
            'patikrinimo-salyga-switch/',
            'ciklai/',
            'ciklai/for/',
            'ciklai/while/',
            'ciklai/do-while/',
            'papildomos-uzduotys-1/',
            'masyvai/',
            'masyvai/vienmaciai-masyvai/',
            'masyvai/dvimaciai-masyvai/',
            'darbas-su-duomenu-failais/',
            'metodai/',
            'metodai/paprastieji-metodai/',
            'metodai/metodai-su-argumentais/',
            'metodai/metodai-su-grazinimo-tipu/',
            'objektinis-programavimas/',
          ]
        }
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
