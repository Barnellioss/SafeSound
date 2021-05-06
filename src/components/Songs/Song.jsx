import React, { useReducer } from 'react'
import { NavLink, Route } from 'react-router-dom';
import { requestArtist, setFavorite } from '../../redux/songsReducer';
import styles from './Main.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { CloseCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons';





let Song = ({ image, songsName, artist, url }) => {

    const data = useSelector((state) => state.songsList.favorite)

    const dispatch = useDispatch()

    const addFavorite = (artist, song, url) => {
        if (data.length) {
            let length = data.filter(e => e.artist === artist && e.song === song).length
            if (length === 0) {
                dispatch(setFavorite({ artist: artist, song: song, url: url }))
            }
        }
        if (data.length === 0) {
            dispatch(setFavorite({ artist: artist, song: song, url: url}))
        }
    }


    return (
        <div className={styles.main__block}>
            <div className={styles.main__items}>
                <div className={styles.main__item}>
                    <img className={styles.band__logo} src={image} alt="songs-image" />
                </div>
                <div className={styles.main__item}>
                    <h3>
                        <NavLink onClick={() => dispatch(requestArtist(artist))} to="/about">{artist.toString()}</NavLink>
                        <span>-</span> {songsName}
                    </h3>
                </div>
                <div className={styles.url}>
                    <a className={styles.href} href={url}>Author's Page</a>
                    <div className={styles.buttons}>
                        <PlusCircleTwoTone onClick={() => addFavorite(artist, songsName, url)} twoToneColor="#52c41a" style={{ paddingLeft: "10px", cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Song;
