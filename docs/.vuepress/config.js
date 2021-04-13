const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Informatikos VBE',
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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'icon', href: '/logo.png' }] // favicon
    // ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-XDVTG3JS66' }],
    // ['script', {}, `window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', 'G-XDVTG3JS66');`]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'ProtingasBlogasLT/informatikos-vbe',
    // repoLabel: 'Contribute!',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Atnaujinti šio puslapio informaciją',
    lastUpdated: true,
    smoothScroll: true,
    lastUpdated: 'Paskutinį kartą atnaujinta',
    nav: [
      { text: 'Pradžia', link: '/' },
      // { text: 'Testas', link: '/testas/' },
      // { text: 'Word', link: '/word/' },
      // { text: 'Excel', link: '/excel/' },
      { text: 'Programavimas C++', link: '/programavimas-cpp/' },
      { text: 'Paskaitos', link: '/paskaitos/2020-2021/' },
      // { text: 'Egzaminų užduotys', link: '/egzaminu-uzduotys/' },
      // { text: 'Apie projektą', link: '/apie-projekta/' },
      { text: 'Atnaujinimai', link: '/atnaujinimai/' },
      { text: 'Kontaktai', link: '/kontaktai/' },
    ],
    sidebar: {
      '/programavimas-cpp/': [
        {
          title: 'Programavimas C++',
          children: [
            '/programavimas-cpp/',
          ]
        },
        {
          title: 'Darbo aplinka',
          children: [
            '/programavimas-cpp/darbo-aplinka/',
          ]
        },
        {
          title: 'Kodo tvarkingumas',
          children: [
            '/programavimas-cpp/kodo-tvarkingumas/',
          ]
        },
        {
          title: 'Kintamieji',
          children: [
            '/programavimas-cpp/kintamieji/',
          ]
        },
        {
          title: 'Informacijos išvedimas į konsolę (cout)',
          children: [
            '/programavimas-cpp/informacijos-isvedimas-i-konsole/',
            '/programavimas-cpp/informacijos-isvedimas-i-konsole/paprasto-teksto-isvedimas/',
            '/programavimas-cpp/informacijos-isvedimas-i-konsole/kintamuju-isvedimas/',
            '/programavimas-cpp/informacijos-isvedimas-i-konsole/teksto-ir-kintamuju-isvedimas/',
          ]
        },
        {
          title: 'C++ programos struktūra',
          children: [
            '/programavimas-cpp/cpp-programos-struktura/'
          ]
        },
        {
          title: 'Aritmetiniai veiksmai',
          children: [
            '/programavimas-cpp/aritmetiniai-veiksmai/',
          ]
        },
        {
          title: 'Informacijos nuskaitymas iš konsolės (cin, getline, get)',
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
          title: 'Patikrinimo sąlygos (if, switch)',
          children: [
            '/programavimas-cpp/patikrinimo-salygos/if/',
            '/programavimas-cpp/patikrinimo-salygos/if/if-dalis/',
            '/programavimas-cpp/patikrinimo-salygos/if/else-if-dalis/',
            '/programavimas-cpp/patikrinimo-salygos/if/else-dalis/',
            '/programavimas-cpp/patikrinimo-salygos/if/pilna-if-salyga/',
            '/programavimas-cpp/patikrinimo-salygos/loginiai-patikrinimo-operatoriai/',
            '/programavimas-cpp/patikrinimo-salygos/switch/',
          ]
        },
        {
          title: 'Ciklai (for, while, do while)',
          children: [
            '/programavimas-cpp/ciklai/',
            '/programavimas-cpp/ciklai/for/',
            '/programavimas-cpp/ciklai/while/',
            '/programavimas-cpp/ciklai/do-while/',
          ]
        },
        {
          title: 'Papildomos užduotys',
          children: [
            '/programavimas-cpp/papildomos-uzduotys-1/'
          ]
        },
        {
          title: 'Masyvai ir algoritmai',
          children: [
            '/programavimas-cpp/masyvai-ir-algoritmai/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/ivedimas-isvedimas/',
            '/programavimas-cpp/masyvai-ir-algoritmai/algoritmai/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/skaiciavimai/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/atrinkimas-filtravimas/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/paieska/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/rikiavimas/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/keitimas/',
            '/programavimas-cpp/masyvai-ir-algoritmai/dvimaciai/',
          ]
        },
        {
          title: 'Papildomos užduotys',
          children: [
            '/programavimas-cpp/papildomos-uzduotys-2/'
          ]
        },
        {
          title: 'Darbas su duomenų failais',
          children: [
            '/programavimas-cpp/darbas-su-duomenu-failais/'
          ]
        },
        {
          title: 'Funkcijos',
          children: [
            '/programavimas-cpp/funkcijos/',
            '/programavimas-cpp/funkcijos/paprasciausios-funkcijos/',
            '/programavimas-cpp/funkcijos/funkcijos-su-argumentais/',
            '/programavimas-cpp/funkcijos/funkcijos-su-grazinimo-tipu/',
          ]
        },
        {
          title: 'Struktūros',
          children: [
            '/programavimas-cpp/strukturos/',
          ]
        },
        {
          title: 'Papildomai: GUI (Grafinė vartotojo sąsaja)',
          children: [
            '/programavimas-cpp/gui/',
            '/programavimas-cpp/gui/aplinkos-pasiruosimas/',
          ]
        },
      ],
      // '/egzaminu-uzduotys/': [
      //   {
      //     title: 'Egzaminų užduotys',
      //     path: '/egzaminu-uzduotys/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
      // '/apie-projekta/': [
      //   {
      //     title: 'Apie projektą',
      //     path: '/apie-projekta/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
      // '/testas/': [
      //   {
      //     title: 'Testas',
      //     path: '/testas/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
      // '/word/': [
      //   {
      //     title: 'Microsoft Word',
      //     path: '/word/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
      // '/excel/': [
      //   {
      //     title: 'Microsoft Excel',
      //     path: '/excel/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
      // '/paskaitos/': [
      //   {
      //     title: 'Paskaitos',
      //     path: '/paskaitos/',
      //     children: [
      //       // '',
      //       '/paskaitos/2020m/',
      //     ]
      //   }
      // ],
      // '/naujienos/': [
      //   {
      //     title: 'Naujienos',
      //     path: '/naujienos/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  // plugins: [
    // ['@vuepress/plugin-back-to-top'],
    // ['@vuepress/plugin-medium-zoom'],
  // ]
}
