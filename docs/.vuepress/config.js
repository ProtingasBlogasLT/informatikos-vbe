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
      // { text: 'Programavimas C++', link: '/programavimas-cpp/' },
      {
        text: 'Programavimas',
        items: [
          { text: 'Python', link: '/programavimas-python/' },
          { text: 'C++', link: '/programavimas-cpp/' },
        ]
      },
      {
        text: 'Dokumentų tvarkymas',
        items: [
          { text: 'Microsoft Word', link: '/microsoft-word/' },
          { text: 'Microsoft Excel', link: '/microsoft-excel/' },
        ]
      },
      { text: 'Paskaitos', link: '/paskaitos/2021-2022/' },
      // { text: 'Egzaminų užduotys', link: '/egzaminu-uzduotys/' },
      { text: 'Pasiūlymai', link: '/pasiulymai/' },
      { text: 'Apie mus',
        items: [
          // { text: 'Apie mus', link: '/apie-mus/' },
          { text: 'Atnaujinimai', link: '/atnaujinimai/' },
          { text: 'Kontaktai', link: '/kontaktai/' },
        ]
      },
    ],
    sidebar: {
      '/programavimas-python/': [
        {
          title: 'Programavimas Python',
          children: [
            '/programavimas-python/',
          ]
        },
        {
          title: 'Darbo aplinka',
          children: [
            '/programavimas-python/darbo-aplinka/',
          ]
        },
        {
          title: 'Kodo tvarkingumas',
          children: [
            '/programavimas-python/kodo-tvarkingumas/',
          ]
        },
        {
          title: 'Kintamieji',
          children: [
            '/programavimas-python/kintamieji/',
          ]
        },
        {
          title: 'Informacijos išvedimas į konsolę',
          children: [
            '/programavimas-python/informacijos-isvedimas-i-konsole/',
            '/programavimas-python/informacijos-isvedimas-i-konsole/paprasto-teksto-isvedimas/',
            '/programavimas-python/informacijos-isvedimas-i-konsole/kintamuju-isvedimas/',
            '/programavimas-python/informacijos-isvedimas-i-konsole/teksto-ir-kintamuju-isvedimas/',
          ]
        },
        // {
        //   title: 'Python programos struktūra',
        //   children: [
        //     '/programavimas-python/python-programos-struktura/'
        //   ]
        // },
        {
          title: 'Aritmetiniai veiksmai',
          children: [
            '/programavimas-python/aritmetiniai-veiksmai/',
          ]
        },
        {
          title: 'Informacijos nuskaitymas iš konsolės',
          children: [
            '/programavimas-python/informacijos-nuskaitymas-is-konsoles/',
            '/programavimas-python/informacijos-nuskaitymas-is-konsoles/paprasto-teksto-nuskaitymas/',
            '/programavimas-python/informacijos-nuskaitymas-is-konsoles/skaiciu-nuskaitymas/',
            '/programavimas-python/informacijos-nuskaitymas-is-konsoles/tiesos-netiesos-nuskaitymas/',
            '/programavimas-python/informacijos-nuskaitymas-is-konsoles/simbolio-nuskaitymas/',
            '/programavimas-python/informacijos-nuskaitymas-is-konsoles/papildomos-uzduotys/',
          ]
        },
        {
          title: 'Patikrinimo sąlygos (if, switch)',
          children: [
            '/programavimas-python/patikrinimo-salygos/if/',
            '/programavimas-python/patikrinimo-salygos/if/if-dalis/',
            '/programavimas-python/patikrinimo-salygos/if/else-if-dalis/',
            '/programavimas-python/patikrinimo-salygos/if/else-dalis/',
            '/programavimas-python/patikrinimo-salygos/if/pilna-if-salyga/',
            '/programavimas-python/patikrinimo-salygos/loginiai-patikrinimo-operatoriai/',
            '/programavimas-python/patikrinimo-salygos/switch/',
          ]
        },
        {
          title: 'Ciklai (for, while, do while)',
          children: [
            '/programavimas-python/ciklai/',
            '/programavimas-python/ciklai/for/',
            '/programavimas-python/ciklai/while/',
            '/programavimas-python/ciklai/do-while/',
          ]
        },
        {
          title: 'Papildomos užduotys',
          children: [
            '/programavimas-python/papildomos-uzduotys-1/'
          ]
        },
        {
          title: 'Masyvai ir algoritmai',
          children: [
            '/programavimas-python/masyvai-ir-algoritmai/',
            '/programavimas-python/masyvai-ir-algoritmai/vienmaciai/',
            '/programavimas-python/masyvai-ir-algoritmai/vienmaciai/ivedimas-isvedimas/',
            '/programavimas-python/masyvai-ir-algoritmai/algoritmai/',
            '/programavimas-python/masyvai-ir-algoritmai/vienmaciai/skaiciavimai/',
            '/programavimas-python/masyvai-ir-algoritmai/vienmaciai/atrinkimas-filtravimas/',
            '/programavimas-python/masyvai-ir-algoritmai/vienmaciai/paieska/',
            '/programavimas-python/masyvai-ir-algoritmai/vienmaciai/rikiavimas/',
            '/programavimas-python/masyvai-ir-algoritmai/vienmaciai/keitimas/',
            '/programavimas-python/masyvai-ir-algoritmai/dvimaciai/',
            '/programavimas-python/masyvai-ir-algoritmai/sarasai/',
          ]
        },
        {
          title: 'Papildomos užduotys',
          children: [
            '/programavimas-python/papildomos-uzduotys-2/'
          ]
        },
        {
          title: 'Darbas su duomenų failais',
          children: [
            '/programavimas-python/darbas-su-duomenu-failais/',
            '/programavimas-python/darbas-su-duomenu-failais/nuskaitymas/',
            '/programavimas-python/darbas-su-duomenu-failais/isvedimas/',
            '/programavimas-python/darbas-su-duomenu-failais/darbas-su-keliais-failais/',
          ]
        },
        {
          title: 'Funkcijos',
          children: [
            '/programavimas-python/funkcijos/',
            '/programavimas-python/funkcijos/paprasciausios-funkcijos/',
            '/programavimas-python/funkcijos/funkcijos-su-argumentais/',
            '/programavimas-python/funkcijos/funkcijos-su-grazinimo-tipu/',
            '/programavimas-python/funkcijos/reiksmiu-grazinimas-per-funkcijos-parametrus/',
            '/programavimas-python/funkcijos/bendravardes-funkcijos/',
          ]
        },
        {
          title: 'Objektinis programavimas',
          children: [
            '/programavimas-python/objektinis-programavimas/',
            // '/programavimas-python/objektinis-programavimas/strukturos/',
            // '/programavimas-python/objektinis-programavimas/strukturos/kurimas-ivedimas-isvedimas/',
            // '/programavimas-python/objektinis-programavimas/strukturos/funkcijos-metodai/',
            // '/programavimas-python/objektinis-programavimas/strukturos/konstruktoriai/',
            // '/programavimas-python/objektinis-programavimas/strukturos/objektu-masyvai/ivedimas-isvedimas/',
            // '/programavimas-python/objektinis-programavimas/strukturos/objektu-masyvai/skaiciavimai/',
            // '/programavimas-python/objektinis-programavimas/strukturos/objektu-masyvai/rikiavimas/',
            // '/programavimas-python/objektinis-programavimas/klases/',
          ]
        },
        {
          title: 'Pasiruošimas informatikos VBE',
          children: [
            '/programavimas-python/pasiruosimas-informatikos-vbe/',
          ]
        },
        // {
        //   title: 'Papildomai: GUI (Grafinė vartotojo sąsaja)',
        //   children: [
        //     // '/programavimas-python/gui/',
        //     '/programavimas-python/gui/aplinkos-pasiruosimas/',
        //     '/programavimas-python/gui/1-dalis/',
        //     '/programavimas-python/gui/2-dalis/',
        //   ]
        // },
        // {
        //   title: 'aaaaa',
        //   children: [
        //     '/programavimas-python/aaaaa/',
        //   ]
        // },
      ],
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
            '/programavimas-cpp/masyvai-ir-algoritmai/vektoriai/',
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
            '/programavimas-cpp/darbas-su-duomenu-failais/',
            '/programavimas-cpp/darbas-su-duomenu-failais/nuskaitymas/',
            '/programavimas-cpp/darbas-su-duomenu-failais/isvedimas/',
            '/programavimas-cpp/darbas-su-duomenu-failais/darbas-su-keliais-failais/',
          ]
        },
        {
          title: 'Funkcijos',
          children: [
            '/programavimas-cpp/funkcijos/',
            '/programavimas-cpp/funkcijos/paprasciausios-funkcijos/',
            '/programavimas-cpp/funkcijos/funkcijos-su-argumentais/',
            '/programavimas-cpp/funkcijos/funkcijos-su-grazinimo-tipu/',
            '/programavimas-cpp/funkcijos/reiksmiu-grazinimas-per-funkcijos-parametrus/',
            '/programavimas-cpp/funkcijos/bendravardes-funkcijos/',
          ]
        },
        {
          title: 'Objektinis programavimas',
          children: [
            '/programavimas-cpp/objektinis-programavimas/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/kurimas-ivedimas-isvedimas/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/funkcijos-metodai/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/konstruktoriai/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/objektu-masyvai/ivedimas-isvedimas/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/objektu-masyvai/skaiciavimai/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/objektu-masyvai/rikiavimas/',
            '/programavimas-cpp/objektinis-programavimas/klases/',
          ]
        },
        {
          title: 'Pasiruošimas informatikos VBE',
          children: [
            '/programavimas-cpp/pasiruosimas-informatikos-vbe/',
          ]
        },
        {
          title: 'Papildomai: GUI (Grafinė vartotojo sąsaja)',
          children: [
            // '/programavimas-cpp/gui/',
            '/programavimas-cpp/gui/aplinkos-pasiruosimas/',
            '/programavimas-cpp/gui/1-dalis/',
            '/programavimas-cpp/gui/2-dalis/',
          ]
        },
      ],
      '/microsoft-word/': [
        {
          title: 'Microsoft Word',
          children: [
            '/microsoft-word/',
          ]
        },
        {
          title: 'Įvadas į Microsoft Word (skirtumai tarp skirtingų Office versijų)',
          children: [
            '/microsoft-word/ivadas-i-microsoft-word/'
          ]
        },
        {
          title: 'Kelių lygių ženklinti / numeruoti sąrašai',
          children: [
            '/microsoft-word/keliu-lygiu-zenklinti-numeruoti-sarasai/',
            '/microsoft-word/keliu-lygiu-zenklinti-numeruoti-sarasai/naujo-saraso-sukurimas/',
            '/microsoft-word/keliu-lygiu-zenklinti-numeruoti-sarasai/numeruoto-zenklinto-saraso-modifikavimas/',
          ]
        },
        {
          title: 'Dokumento stiliai',
          children: [
            '/microsoft-word/dokumento-stiliai/',
            '/microsoft-word/dokumento-stiliai/simbolio-stilius/',
            '/microsoft-word/dokumento-stiliai/pastraipos-stilius/',
            '/microsoft-word/dokumento-stiliai/naujo-stiliaus-sukurimas/',
            '/microsoft-word/dokumento-stiliai/stiliaus-modifikavimas/',
          ]
        },
        {
          title: 'Dokumento automatinis turinys',
          children: [
            '/microsoft-word/dokumento-automatinis-turinys/',
            '/microsoft-word/dokumento-automatinis-turinys/turinio-lygiai/',
            '/microsoft-word/dokumento-automatinis-turinys/automatinio-turinio-formatavimas/',
          ]
        },
        {
          title: 'Nuorodos',
          children: [
            '/microsoft-word/nuorodos/',
            '/microsoft-word/nuorodos/zymeles/',
            '/microsoft-word/nuorodos/saitai/',
            '/microsoft-word/nuorodos/isnasos/',
          ]
        },
        {
          title: 'Objektų numeravimas',
          children: [
            '/microsoft-word/objektu-numeravimas/',
            '/microsoft-word/objektu-numeravimas/naujos-etiketes-sukurimas/',
            '/microsoft-word/objektu-numeravimas/kryzmines-nuorodos/',
            '/microsoft-word/objektu-numeravimas/automatinis-objektu-turinio-sudarymas-pagal-etikete/',
          ]
        },
        {
          title: 'Dalykinė rodyklė',
          children: [
            '/microsoft-word/dalykine-rodykle/',
            '/microsoft-word/dalykine-rodykle/zodziu-itraukimas-i-dalykine-rodykle/',
            '/microsoft-word/dalykine-rodykle/dalykines-rodykles-iterpimas/',
          ]
        },
        {
          title: 'Teksto skiltys',
          children: [
            '/microsoft-word/teksto-skiltys/',
            '/microsoft-word/teksto-skiltys/skilciu-stulpeliu-sudarymas/',
            '/microsoft-word/teksto-skiltys/luziai-ju-tipai-ir-iterpimas/',
          ]
        },
        {
          title: 'Puslapinės antraštės / poraštės',
          children: [
            '/microsoft-word/puslapines-antrastes-porastes/',
            '/microsoft-word/puslapines-antrastes-porastes/puslapio-numerio-iterpimas/',
            '/microsoft-word/puslapines-antrastes-porastes/skirtingos-antrastes-porastes/',
          ]
        },
        {
          title: 'Tabuliacija',
          children: [
            '/microsoft-word/tabuliacija/',
            '/microsoft-word/tabuliacija/tabuliacijos-zymu-tipai/',
            '/microsoft-word/tabuliacija/zymiu-atidejimas-modifikavimas-pasalinimas/',
          ]
        },
        {
          title: 'Lentelės',
          children: [
            '/microsoft-word/lenteles/',
            '/microsoft-word/lenteles/rikiavimas/',
            '/microsoft-word/lenteles/lenteles-formatavimas/',
            '/microsoft-word/lenteles/langelio-parastes/',
          ]
        },
        {
          title: 'Dokumento parengimas spausdinimui',
          children: [
            '/microsoft-word/dokumento-parengimas-spausdinimui/',
            '/microsoft-word/dokumento-parengimas-spausdinimui/puslapio-orientacija/',
            '/microsoft-word/dokumento-parengimas-spausdinimui/parasciu-dydis/',
            '/microsoft-word/dokumento-parengimas-spausdinimui/dokumento-eksportavimas-i-pdf/',
          ]
        },
      ],
      '/microsoft-excel/': [
        {
          title: 'Microsoft Excel',
          children: [
            '/microsoft-excel/',
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
      // Saugus ir teisėtas informacijos ir interneto naudojimas (testas)
      // '/testas/': [
      //   {
      //     title: 'Testas',
      //     path: '/testas/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
      // Tekstinių dokumentų maketavimas (Microsoft Word)
      // '/word/': [
      //   {
      //     title: 'Microsoft Word',
      //     path: '/word/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
      // Skaitinės informacijos apdorojimas skaičiuokle (Microsoft Excel)
      // '/excel/': [
      //   {
      //     title: 'Microsoft Excel',
      //     path: '/excel/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
      '/paskaitos/': [
        {
          title: 'Paskaitos',
          path: '/paskaitos/',
          children: [
            // '/paskaitos/',
            '/paskaitos/2021-2022/',
            '/paskaitos/2020-2021/',
          ]
        }
      ],
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
