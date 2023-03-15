import React from 'react'
import SearchPage from './SearchPage'
import SongItem from './songsList/songItem'
import { nanoid } from 'nanoid'



let SearchPages = ({tracks, country}) => {
    
    
    let songItems = tracks.map(data => <SongItem artist = {!country ? data.artist : data.artist.name} key={nanoid()} name = {data.name}  url = {data.url}/>)
       return ( 
           <div className="">
               <SearchPage country={country}/>
               {songItems}
           </div>
       )
}

export default SearchPages;