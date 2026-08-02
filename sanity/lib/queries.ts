import {defineQuery} from 'next-sanity'

export const postsIndexQuery = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    author-> { _id, name },
    categories[]-> { _id, title },
    coverImage {
      asset-> {
        _id,
        url,
        metadata { lqip, dimensions { width, height } }
      },
      alt,
      hotspot,
      crop,
    },
  }`,
)

export const postBySlugQuery = defineQuery(
  `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    author-> {
      _id,
      name,
      bio,
      avatar {
        asset-> { _id, url, metadata { lqip, dimensions { width, height } } },
        alt,
        hotspot,
        crop,
      }
    },
    categories[]-> { _id, title, description },
    coverImage {
      asset-> {
        _id,
        url,
        metadata { lqip, dimensions { width, height } }
      },
      alt,
      hotspot,
      crop,
    },
    body
  }`,
)
