import type {PortableTextBlock} from '@portabletext/types'

export type SanityImage = {
  _type?: 'image'
  _key?: string
  asset?: {
    _ref?: string
    _id?: string
    url?: string
    metadata?: {
      lqip?: string
      dimensions?: {width?: number; height?: number}
    }
  }
  alt?: string
  caption?: string
  hotspot?: {x?: number; y?: number; height?: number; width?: number}
  crop?: {top?: number; bottom?: number; left?: number; right?: number}
}

export type PortableImage = SanityImage & {_type: 'image'}

export type Post = {
  _id: string
  title: string
  slug: string
  publishedAt?: string
  excerpt?: string
  author?: {_id?: string; name?: string}
  categories?: {_id: string; title: string; description?: string}[]
  coverImage?: SanityImage
  body?: PortableTextBlock[]
}
