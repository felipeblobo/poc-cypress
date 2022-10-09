export interface IAlbum {
  name: string
  images: images[]
  artists: artists[]
}

type images = {
  url: string
}

type artists = {
  name: string
}
