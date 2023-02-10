import React from 'react'
import SearchPage from './SearchPage'
import SongItem from './songsList/songItem'
import { nanoid } from 'nanoid'



let SearchPages = ({tracks, formValue}) => {
    
    
    let songItems = tracks.map(data => <SongItem artist = {data.artist} key={nanoid()} name = {data.name}  url = {data.url} />)
       return ( 
           <div className="">
               <SearchPage/>
               {songItems}
           </div>
       )
}

export default SearchPages;