import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import image from '../../images/avatar.webp'
import { useDispatch, useSelector } from 'react-redux'
import { getToken, setToken } from '../../redux/songsReducer'
import { findToken } from '../UsersPage/UsersPage'


let Header = () => {
    debugger
    let dispatch = useDispatch();
    let link = document.URL;

    let token = findToken(link);

    useEffect(() => {
        dispatch(setToken(token))
    }, [])

    let auth = token === "" ? "/UserUnAuthentified" : "User";

    return (
        <div className={style.header}>
            <div className={style.header__wrapper}>
                <h1 className={style.header__title}>SafeSound</h1>
                <div className={style.header__image}>
                    <NavLink to={auth}>
                        <img src={image} alt="avatar" />
                    </NavLink>
                </div>
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
                <div className={style.header__item}>
                    <NavLink to="/Country">Coutry top tracks</NavLink>
                </div>
            </div>
        </div>
    )
}


export default Header;