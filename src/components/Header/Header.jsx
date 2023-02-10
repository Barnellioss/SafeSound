import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'


let Header = () => {
    return (
        <div className={style.header}>
            <div>
                <h1 className={style.header__title}>SafeSound</h1>
            </div>
            <div className={style.header__items}>
                <div className={style.header__item}>
                    <NavLink to="/TopSongs">TopSongs</NavLink>
                </div>
                <div className={style.header__item}>
                    <NavLink to="/SearchPage">Search</NavLink>
                </div>
                <div className={style.header__item}>
                    <NavLink to="/FavoritePage">Favorite</NavLink>
                </div>
                <div className={style.header__item}>
                    <NavLink to="/History">History</NavLink>
                </div>
            </div>
        </div>
    )
}


export default Header;