import React from 'react'
import { NavLink } from 'react-router-dom';
import { requestArtist, requestSong, setFavorite } from '../../redux/songsReducer';
import styles from './Main.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {CheckOutlined, PlusCircleTwoTone} from '@ant-design/icons';





let Song = ({ image, name, artist, url }) => {

    const data = useSelector((state) => state.songsList.favorite)

    const songList = useSelector((state) => state.songsList)

    const inFavorite = songList.favorite.filter(item => item.song === name && item.artist === artist).length

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
            <div className={inFavorite ? styles.main__chosen : styles.main__items}>
                <div className={styles.main__item}>
                    <img className={styles.band__logo} src={image} alt="songs-image" />
                </div>
                <div className={styles.main__item}>
                    <h3>
                        <NavLink onClick={() => dispatch(requestArtist(artist))} to="/about">{artist.toString()}</NavLink>
                        <span> - </span> 
                        <NavLink onClick={() => dispatch(requestSong(artist, name))} to="/track">{name.toString()}</NavLink>
                    </h3>
                </div>
                <div className={styles.url}>
                    <a className={styles.href} href={url} target="_blank">Author's Page</a>
                    <div className={styles.buttons}>
                        {inFavorite ?
                            <CheckOutlined style={{paddingLeft: "10px"}}/>
                            :
                            <PlusCircleTwoTone onClick={() => addFavorite(artist, name, url)} twoToneColor="#52c41a"
                                               style={{paddingLeft: "10px", cursor: 'pointer'}}/>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Song;
