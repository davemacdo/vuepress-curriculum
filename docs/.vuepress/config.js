module.exports = {
  title: 'New Music Composition',
  // author: 'David MacDonald',
  description: 'a curriculum for university composers',
  themeConfig: {
    sidebar: {
      '/comp-1/': [
        ['', 'Composition 1'],
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
            'unit-3/discussion-3-1',
            'unit-3/tempo-modulation-practice',
            'unit-3/rhythmic-motive-and-etude',
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
      ], // comp-1
      '/comp-2/': [
        ['', 'Composition 2'],
        ['muc2104c-syllabus', 'Syllabus'],
        {
          title: 'Extended Techniques and Unconventional Notation',
          collapsible: true,
          children: [
            ['unit-1/unit-1-overview', 'Overview'],
            'unit-1/notation-experiment',
            'unit-1/extended-technique-demonstration',
            'unit-1/extended-technique-composition'
          ]
        },
        {
          title: 'Mixing Traditions',
          collapsible: true,
          children: [
            ['unit-2/unit-2-overview', 'Overview'],
            'unit-2/discussion-mixing-musical-traditions',
            'unit-2/non-classical-research-and-listening',
            'unit-2/third-stream',
            'unit-2/mixing-traditions-composition'
          ]
        },
        {
          title: 'Computer Music',
          collapsible: true,
          children: [
            ['unit-3---computer-music/unit-3-overview', 'Overview'],
            'unit-3---computer-music/dynamic-synthesizer',
            'unit-3---computer-music/in-class-workshop',
            'unit-3---computer-music/computer-music-composition'
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
      ], // comp-2
      '/comp-lessons/': [
        ['', 'Composition Lessons'],
        ['composition-syllabus', 'Syllabus'],
        {
          title: 'Assignments',
          collapsible: true,
          children: [
            'composition-goals',
            'composition-jury-instructions',
            'listening-assignment',
            ['rubrics.md', 'Rubrics'],
          ]
        },
        {
          title: 'Reference',
          collapsible: true,
          children: [
            'program-notes',
            ['senior-recital-guide', 'Senior Recital Guide'],
          ]
        }
      ], // comp-lessons
      // fallback
      '/': [
        ['', 'Introduction'],
        ['comp-1/', 'Composition 1 Class'],
        ['comp-2/', 'Composition 2 Class'],
        ['comp-lessons/', 'Composition Lessons']
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
