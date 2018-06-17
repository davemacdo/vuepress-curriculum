module.exports = {
  title: 'New Music Composition',
  // author: 'David MacDonald',
  description: 'a curriculum for university composers',
  themeConfig: {
    sidebar: {
      '/comp-1/': [
        '',
        {
          title: 'Unit 1 - Tonality',
          collapsible: true,
          children: [
            'unit-1/unit-1-overview',
            'unit-1/tonality-composition'
          ]
        }
      ],
      // fallback
      '/': [
        ['', 'Introduction'],
        ['comp-1/', 'Composition 1']
      ]
    }
  },
  base: '/vuepress-curriculum',
  markdown: {
    config: md => {
      md.use(require('markdown-it-footnote'))
    }
  }
}
