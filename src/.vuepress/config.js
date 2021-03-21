/**
 * Theme configuration reference.
 * https://v1.vuepress.vuejs.org/config/
 * https://v1.vuepress.vuejs.org/theme/
 * https://v1.vuepress.vuejs.org/plugin/
 */
module.exports = {

  title: 'Vue Charts.css',

  description: 'Vue wrapper for the rising CSS data visualization framework',

  base: "/docs/",

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/charts.css@0.9.0/dist/charts.min.css' }],
    ['link', { rel: 'icon', href: '/assets/img/logo.svg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'mask-icon', href: '/assets/img/logo.svg', color: '#f57' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/img/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#f57' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/img/logo.svg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  themeConfig: {
    repo: 'https://github.com/Vue-Charts-CSS/docs',
    docsBranch: 'main',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: false,
    logo: '/assets/img/logo.svg',
    displayAllHeaders: true,
    search: true,
    nav: [
      {
        text: 'Get Started',
        link: '/get-started/',
      },
      {
        text: 'Props',
        link: '/props/'
      },
      {
        text: 'Charts',
        link: '/charts/'
      },
      {
        text: 'Development',
        link: '/development/'
      },
      {
        text: 'GitHub repo',
        link: 'https://github.com/Vue-Charts-CSS/vue.charts.css'
      }
    ],
    sidebar: [
      {
        title: 'Get Started',
        path: '/get-started/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/get-started/installation',
          '/get-started/usage',
          '/get-started/about',
        ]
      },
      {
        title: 'Props',
        path: '/props/',
        collapsable: true,
        sidebarDepth: -1,
        children: [
          '/props/heading',
          '/props/datasets',
          '/props/labels',
          '/props/spacing',
          '/props/reverse-order',
          '/props/colors',
          '/props/stacked',
          '/props/tooltips',
          '/props/legend',
        ]
      },
      {
        title: 'Charts',
        path: '/charts/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/charts/bar',
          '/charts/column',
          '/charts/area',
          '/charts/line',
          '/charts/pie',
          '/charts/donut',
          '/charts/polar',
          '/charts/radar',
          '/charts/mixed',
        ]
      },
      {
        title: 'Development',
        path: '/development/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/development/design-principles',
          '/development/roadmap',
        ]
      },
    ]
  },

  markdown: {
    lineNumbers: true,
    toc: true
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-192692473-1'
      }
    ],
    [
      'vuepress-plugin-seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: () => 'https://chartscss.org/assets/img/logo.png',
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ]
  ]
}
