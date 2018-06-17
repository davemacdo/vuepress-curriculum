module.exports = {
  title: 'New Music Composition',
  // author: 'David MacDonald',
  description: 'a curriculum for university composers',
  themeConfig: {
    sidebar: {
      '/comp-1/': [
        ['', 'Welcome'],
        {
          title: 'Tonality',
          collapsible: true,
          children: [
            ['unit-1/unit-1-overview', 'Overview'],
            'unit-1/tonality-composition'
          ]
        },
        {
          title: 'Motivic Development',
          collapsible: true,
          children: [
            ['unit-2/unit-2-overview', 'Overview'],
            'unit-2/motivic-development-composition'
          ]
        },
        {
          title: 'Rhythm and Meter',
          collapsible: true,
          children: [
            ['unit-3/unit-3-overview', 'Overview'],
            'unit-3/rhythm-and-meter-composition'
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
  base: '/vuepress-curriculum/',
  markdown: {
    config: md => {
      md.use(require('markdown-it-footnote'))
    }
  }
}
