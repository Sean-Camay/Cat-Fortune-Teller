export interface FortuneTemplate {
  id: string
  name: string
  template: string
  placeholders: string[]
}

export const fortuneTemplates: FortuneTemplate[] = [
  {
    id: 'template1',
    name: 'Action Template',
    template: 'You will [action] soon. A [adjective] [noun] will [verb] you.',
    placeholders: ['action', 'adjective', 'noun', 'verb'],
  },
  {
    id: 'template2',
    name: 'Stranger Template',
    template:
      'A [adjective] stranger will [action] into your life. You will [reaction] them.',
    placeholders: ['adjective', 'action', 'reaction'],
  },
  {
    id: 'template3',
    name: 'Future Template',
    template: 'Your [noun] will [verb] [adverb]. This will make you [emotion].',
    placeholders: ['noun', 'verb', 'adverb', 'emotion'],
  },
]
