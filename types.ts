export interface Caf {
  id: number
  content: Array<Cover | Section | Extra | Conclusion>
}

export interface Item {
  item: Cover | Section | Extra | Conclusion
}

interface Base {
  type?: 'cover' | 'section' | 'extra' | 'conclusion'
}

export interface Cover extends Base {
  title: string
  serie: string
  topic: number
  quote: string
}

export interface Section extends Base {
  title: string
  quote: string
  content: string
}

export interface Extra extends Base {
  content: string
}

export interface Conclusion extends Base {
  content: string
}
