import { nanoid } from 'nanoid'
import React from 'react'
import Song from './Song'



let Songs = ({songs}) => {
    
    let arr = Object.values(songs).map(i => i.image).map(a => a[3]).map(d => Object.values(d)).map(l => l[0])

    let songsData = songs.map(s => <Song image ={arr.map(l=>l)} key={nanoid()} name = {s.name} artist = {s.artist.name} url = {s.artist.url} />)
       return ( 
           <div className="">
               {songsData}
           </div>
       )
}

export default Songs;