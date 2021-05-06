import React from 'react'
import SearchPage from './SearchPage'
import SongItem from './songsList/songItem'
import { nanoid } from 'nanoid'


//Object.values(obj.tracks.track).map(i=>i.image).map(a=>a[3]).map(a => Object.values(a)).map(a=> a[0])

let SearchPages = ({tracks, formValue}) => {
    
    /*const onSubmit = () => {
        store.dispatch(searchRequest(input))
    }
*/
    
    let songItems = tracks.map(data => <SongItem artist = {data.artist} key={nanoid()} songName = {data.name}  url = {data.url} />)
       return ( 
           <div className="">
               <SearchPage/>
               {songItems}
           </div>
       )
}

export default SearchPages;