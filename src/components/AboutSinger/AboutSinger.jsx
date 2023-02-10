import { nanoid } from 'nanoid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAlbums } from '../../redux/songsReducer'
import styles from './AboutSingers.module.css'
import Tags from './Tags/Tags'



let AboutSinger = ({ image, artistName, text, tags }) => {

    let tagCalling = tags.map(d => <Tags key={nanoid()} tag={d} />);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAlbums(artistName));
    }, [])

    let albums = useSelector((state) => state.songsList.albums);

    

    return (
        <div className={styles.main__items__container}>
            <div className={styles.main__items}>
                <div className={styles.main__image_block}>
                    <div>
                        <img src={image} alt="artist-image" />
                    </div>
                    <div>
                        <h3 className={styles.main__item_header}>{artistName}</h3>
                    </div>
                    <div>
                        <h4 className={styles.subtitle}>Albums:</h4>
                        <div className={styles.album__wrapper}>
                            {albums.map(album => <p>{album.name}</p>)}
                        </div>
                    </div>
                </div>
                <div className={styles.main__item}>
                    <p className={styles.main__text}>
                        {text}
                    </p>
                </div>
                <div className={styles.main__tags_grid}>
                    {tagCalling}
                </div>
            </div >
        </div >
    )
}

export default AboutSinger;
