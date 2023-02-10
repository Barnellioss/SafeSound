import {CheckOutlined, CloseCircleTwoTone, PlusCircleTwoTone} from '@ant-design/icons';
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {requestArtist, requestSong, setFavorite} from '../../../redux/songsReducer';
import styles from '../SearchPages.module.css'
import {NavLink} from "react-router-dom";

let SongItem = ({ artist, name, url }) => {

    const data = useSelector((state) => state.songsList)

    const inFavorite = data.favorite.filter(item => item.song === name && item.artist === artist).length

    const dispatch = useDispatch()

    useEffect(() => {
        
    },[data.favorite])

    const addFavorite = (artist, song) => {
        if (data.favorite.length) {
            let length = data.favorite.filter(e => e.artist === artist && e.song === song).length
            if (length === 0) {
                dispatch(setFavorite({ artist: artist, song: song, url: url }))
            }
        }
        if (data.favorite.length === 0) {
            dispatch(setFavorite({ artist: artist, song: song, url: url }))
        }
    }

    return (
        <div className={inFavorite ? styles.main__chosen : styles.main__items }>
            <h3 className={styles.title}>
                <NavLink onClick={() => dispatch(requestArtist(artist))} to="/about">{artist.toString()}</NavLink>
                <span> - </span>
                <NavLink onClick={() => dispatch(requestSong(artist,name))} to="/track">{name.toString()}</NavLink>
            </h3>
            <div className={styles.url}>
                <a className={styles.href} href={url}>Author's Page</a>
                <div className={styles.buttons}>
                    {inFavorite
                       ?
                        <CheckOutlined style={{paddingLeft: "10px"}}/>
                        :
                        <PlusCircleTwoTone onClick={() => addFavorite(artist,name, url)} twoToneColor="#52c41a"
                                           style={{paddingLeft: "10px", cursor: 'pointer'}}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default SongItem;