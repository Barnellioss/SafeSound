import { CloseCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFavorite } from '../../../redux/songsReducer';
import styles from '../SearchPages.module.css'

let SongItem = ({ artist, songName, url }) => {

    const data = useSelector((state) => state.songsList.favorite)

    const dispatch = useDispatch()

    const addFavorite = (artist, song) => {
        if (data.length) {
            let length = data.filter(e => e.artist === artist && e.song === song).length
            if (length === 0) {
                dispatch(setFavorite({ artist: artist, song: song, url: url }))
            }
        }
        if (data.length === 0) {
            dispatch(setFavorite({ artist: artist, song: song, url: url }))
        }
    }

    return (
        <div className={styles.main__items}>
            <h3 className={styles.title}>
                {artist} <span>-</span> {songName}
            </h3>
            <div className={styles.url}>
                <a className={styles.href} href={url}>Author's Page</a>
                <div className={styles.buttons}>
                    <PlusCircleTwoTone onClick={() => addFavorite(artist, songName, url)} twoToneColor="#52c41a" style={{ paddingLeft: "10px", cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    )
}

export default SongItem;