const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Pasiruošimas IT VBE',
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
      { text: 'Pradžia', link: '/' },
      // { text: 'Testas', link: '/testas/' },
      // { text: 'Word', link: '/word/' },
      // { text: 'Excel', link: '/excel/' },
      { text: 'Programavimas C++', link: '/programavimas-cpp/' },
      // { text: 'Egzaminų užduotys', link: '/egzaminu-uzduotys/' },
      // { text: 'Apie projektą', link: '/apie-projekta/' },
      { text: 'Naujienos', link: '/naujienos/' },
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
          title: 'Kodo tvarkingumas',
          path: '/programavimas-cpp/kodo-tvarkingumas/',
          children: [
            '/programavimas-cpp/kodo-tvarkingumas/',
          ]
        },
        {
          title: 'Kintamieji',
          path: '/programavimas-cpp/kintamieji/',
          children: [
            '/programavimas-cpp/kintamieji/',
          ]
        },
        {
          title: 'Informacijos išvedimas į konsolę',
          path: '/programavimas-cpp/kodo-tvarkingumas/',
          children: [
            '/programavimas-cpp/informacijos-isvedimas-i-konsole/',
            '/programavimas-cpp/informacijos-isvedimas-i-konsole/paprasto-teksto-isvedimas/',
            '/programavimas-cpp/informacijos-isvedimas-i-konsole/kintamuju-isvedimas/',
            '/programavimas-cpp/informacijos-isvedimas-i-konsole/teksto-ir-kintamuju-isvedimas/',
          ]
        },
        {
          title: 'Aritmetiniai veiksmai',
          path: '/programavimas-cpp/kodo-tvarkingumas/',
          children: [
            '/programavimas-cpp/aritmetiniai-veiksmai/',
          ]
        },
        {
          title: 'Informacijos nuskaitymas iš konsolės',
          path: '/programavimas-cpp/kodo-tvarkingumas/',
          children: [
            '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/',
            '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/paprasto-teksto-nuskaitymas/',
            '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/skaiciu-nuskaitymas/',
            '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/tiesos-netiesos-nuskaitymas/',
            '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/simbolio-nuskaitymas/',
            '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/papildomos-uzduotys/',
          ]
        },
        {
          title: 'Patikrinimo sąlygos',
          path: '/programavimas-cpp/patikrinimo-salyga-if/',
          children: [
            '/programavimas-cpp/patikrinimo-salyga-if/',
            '/programavimas-cpp/patikrinimo-salyga-if/if-dalis/',
            '/programavimas-cpp/patikrinimo-salyga-if/else-if-dalis/',
            '/programavimas-cpp/patikrinimo-salyga-if/else-dalis/',
            '/programavimas-cpp/patikrinimo-salyga-if/pilna-if-salyga/',
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
          title: 'Papildomos užduotys',
          path: '/programavimas-cpp/papildomos-uzduotys-1/',
          children: [
            '/programavimas-cpp/papildomos-uzduotys-1/'
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
      '/apie-projekta/': [
        {
          title: 'Apie projektą',
          path: '/apie-projekta/',
          children: [
            '',
          ]
        }
      ],
      '/testas/': [
        {
          title: 'Testas',
          path: '/testas/',
          children: [
            '',
          ]
        }
      ],
      '/word/': [
        {
          title: 'Microsoft Word',
          path: '/word/',
          children: [
            '',
          ]
        }
      ],
      '/excel/': [
        {
          title: 'Microsoft Excel',
          path: '/excel/',
          children: [
            '',
          ]
        }
      ],
      '/naujienos/': [
        {
          title: 'Naujienos',
          path: '/naujienos/',
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
