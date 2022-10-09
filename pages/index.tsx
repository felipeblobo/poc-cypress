import type { NextPage } from 'next'
import GetAlbums from '../components/albums/GetAlbums'
import List from '../components/listofAlbums/List'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <GetAlbums />
      <List />
    </div>
  )
}
export default Home
