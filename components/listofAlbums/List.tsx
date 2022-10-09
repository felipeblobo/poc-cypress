import Image from 'next/image'
import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import { IAlbum } from '../../types/album-types'
import { selectAlbums } from '../../redux/albums.slice'

export default function List() {
  const albums = useAppSelector(selectAlbums).albums

  return (
    <div>
      {albums?.map((album: IAlbum) => (
        <div key={album.name}>
          <Image
            src={album.images[0].url}
            alt="album"
            height={400}
            width={400}
          />
          <h3>{album.name}</h3>
          <p>{album.artists[0].name}</p>
        </div>
      ))}
    </div>
  )
}
