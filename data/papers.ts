export type Paper = {
  id: string
  title: string
  venue: string
  year: number
  links: { label: string; url: string }[]
  tags?: string[]
}

export const papers: Paper[] = [
  {
    id: 'example-1',
    title: 'An Example Research Paper',
    venue: 'ExampleConf',
    year: 2024,
    links: [
      { label: 'PDF', url: 'https://example.com/paper.pdf' },
      { label: 'DOI', url: 'https://doi.org/10.0000/example' },
      { label: 'Code', url: 'https://github.com/youruser/example-repo' }
    ],
    tags: ['ml', 'systems']
  },
  {
    id: 'example-2',
    title: 'Another Study',
    venue: 'ArXiv',
    year: 2023,
    links: [
      { label: 'ArXiv', url: 'https://arxiv.org/abs/0000.00000' }
    ],
    tags: ['theory']
  }
]
