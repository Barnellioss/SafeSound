import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import AboutSinger from './AboutSinger';
import styles from './AboutSingers.module.css';

let AboutSingers = ({artist}) => {
    
    //let [value, setState] = useState([])
    let arr = Object.values(artist).map(i => i.image).map(a => a[3]).map(d => Object.values(d))
    let artistData = artist.map(s => <AboutSinger  image = {arr} key={nanoid()} tags = {artist[0].tags.tag.map(d => d.name)} artistName = {artist[0].name} text = {artist[0].bio.content} />)
       return ( 
           <div className={styles.main__container}>
               {artistData}
           </div>
       )
}

export default AboutSingers;