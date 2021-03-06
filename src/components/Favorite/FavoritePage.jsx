import { CloseCircleTwoTone } from '@ant-design/icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteFavorite, requestArtist } from '../../redux/songsReducer';
import styles from '../SearchPage/SearchPages.module.css'




let FavoritePage = () => {

  const dispatch = useDispatch()

  const songs = useSelector((state) => state.songsList.favorite)


  return (
    < div className={styles.main__block} >
      {songs.map((item) =>
        <div className={styles.main__items}>
          <h3 className={styles.title}>
            <NavLink onClick = {() => dispatch(requestArtist(item.artist))} to="/about">{item.artist.toString()}</NavLink>
            <span>-</span> {item.song}
          </h3>
          <div className={styles.url}>
            <a className={styles.href} href={item.url}>Author's Page</a>
            <div className={styles.buttons}>
              <CloseCircleTwoTone onClick={() => dispatch(deleteFavorite(item.artist, item.song))} twoToneColor="#eb2f96" style={{ paddingLeft: "8px", paddingTop: '4px', cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}




export default FavoritePage;