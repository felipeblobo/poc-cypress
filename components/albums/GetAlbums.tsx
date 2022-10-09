import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { researchedAlbums } from '../../redux/albums.slice'

export default function GetAlbums() {
  const [artist, setArtist] = useState('')
  const dispatch = useAppDispatch()

  const GetAlbums = async () => {
    const tokenres = await fetch('/api/spotify?token=true', {
      method: 'POST',
    })
    const tokenResponse = await tokenres.json()
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=album&include_external=audio&q=${artist}`,
      {
        headers: {
          Authorization: 'Bearer ' + tokenResponse.res.access_token,
          'Content-type': 'application/json',
        },
      }
    )
    const data = await response.json()
    dispatch(researchedAlbums(data?.albums?.items))
  }
  return (
    <div>
      <input
        placeholder="artist name"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button onClick={() => GetAlbums()}>Get Shows</button>
    </div>
  )
}
