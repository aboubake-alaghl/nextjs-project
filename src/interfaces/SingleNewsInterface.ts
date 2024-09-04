export default interface SingleNewsInterface {
  data: Data
  meta: Meta
}

export interface Data {
  id: number
  attributes: Attributes
}

export interface Attributes {
  title: string
  content: string
  is_active: boolean
  published_date: string
  excerpt: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  cover: Cover
}

export interface Cover {
  data: Data2
}

export interface Data2 {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: ProviderMetadata3
  createdAt: string
  updatedAt: string
}

export interface Formats {
  thumbnail: Thumbnail
  small: Small
}

export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
  provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
  public_id: string
  resource_type: string
}

export interface Small {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
  provider_metadata: ProviderMetadata2
}

export interface ProviderMetadata2 {
  public_id: string
  resource_type: string
}

export interface ProviderMetadata3 {
  public_id: string
  resource_type: string
}

export interface Meta { }
