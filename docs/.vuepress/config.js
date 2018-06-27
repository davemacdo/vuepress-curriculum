module.exports = {
  title: 'New Music Composition',
  // author: 'David MacDonald',
  description: 'a curriculum for university composers',
  themeConfig: {
    sidebar: {
      '/comp-1/': [
        ['', 'Welcome'],
        ['muc1101c-syllabus', 'Syllabus'],
        {
          title: 'Tonality',
          collapsible: true,
          children: [
            ['unit-1/unit-1-overview', 'Overview'],
            'unit-1/discussion-1-1',
            'unit-1/tonality-practice',
            'unit-1/tonality-etude',
            'unit-1/tonality-composition'
          ]
        },
        {
          title: 'Motivic Development',
          collapsible: true,
          children: [
            ['unit-2/unit-2-overview', 'Overview'],
            'unit-2/discussion-2-1',
            'unit-2/discussion-2-2',
            'unit-2/motive-practice-1',
            'unit-2/motive-practice-2',
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
        },
        {
          title: 'Appendix: Reference',
          collapsible: true,
          children: [
            ['ref/composition-project-rubric', 'Composition Project Rubric'],
            'ref/lesson-assignment',
            'ref/paper-to-pdf',
            'ref/performance-attendance'
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
      md.set({
        typographer: true,
        linkify: true
      }),
      md.use(require('markdown-it-footnote')),
      md.use(require('markdown-it-include')),
      md.use(require('markdown-it-multimd-table'))
    }, 
  }
}
