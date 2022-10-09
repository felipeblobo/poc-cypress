import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAlbum } from '../types/album-types'
import { RootState } from '../store'

// Define a type for the slice state
interface AlbumState {
  albums: IAlbum[]
}

// Define the initial state using that type
const initialState: AlbumState = {
  albums: [],
}

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    researchedAlbums(state, action: PayloadAction<IAlbum[]>) {
      state.albums = action.payload
    },
  },
})

export const selectAlbums = (state: RootState) => state.albums

export const { researchedAlbums } = albumsSlice.actions
export default albumsSlice.reducer
