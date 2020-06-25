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
    sidebar: [
      {
        title: 'Programavimas C++',
        path: '/programavimas-cpp/',
        collapsable: false,
        children: [
          '/programavimas-cpp/',
          '/programavimas-cpp/kodo-tvarkingumas/',
          '/programavimas-cpp/kintamieji/',
          '/programavimas-cpp/informacijos-isvedimas-i-konsole/',
          '/programavimas-cpp/aritmetiniai-veiksmai/',
          '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/',
          '/programavimas-cpp/patikrinimo-salyga-if/',
          '/programavimas-cpp/loginiai-patikrinimo-operatoriai/',
          '/programavimas-cpp/patikrinimo-salyga-switch/',
          '/programavimas-cpp/ciklai/',
          '/programavimas-cpp/ciklai/for/',
          '/programavimas-cpp/ciklai/while/',
          '/programavimas-cpp/ciklai/do-while/',
          '/programavimas-cpp/papildomos-uzduotys-1/',
          '/programavimas-cpp/masyvai/',
          '/programavimas-cpp/masyvai/vienmaciai-masyvai/',
          '/programavimas-cpp/masyvai/dvimaciai-masyvai/',
          '/programavimas-cpp/darbas-su-duomenu-failais/',
          '/programavimas-cpp/metodai/',
          '/programavimas-cpp/metodai/paprastieji-metodai/',
          '/programavimas-cpp/metodai/metodai-su-argumentais/',
          '/programavimas-cpp/metodai/metodai-su-grazinimo-tipu/',
          '/programavimas-cpp/objektinis-programavimas/',
        ]
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
