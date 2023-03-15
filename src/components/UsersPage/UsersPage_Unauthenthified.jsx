import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { KEY } from "../../api/api";
import styles from '../AboutSinger/AboutSingers.module.css'


let UsersPageUnAuthentified = () => {


    let dispatch = useDispatch();

      
    return (
        <div className={styles.user__block}>
            <h3 className={styles.subtitle}>Would you like to connect this application with your Last FM account?</h3>
            <div className={styles.button__wrapper}>
                <button className={styles.button__agree}><a href={`https://www.last.fm/api/auth?api_key=${KEY}&cb=http://localhost:3000/SafeSound#/User`}>Last FM</a></button>
                <button className={styles.button__disagree}>Cancel</button>
            </div>
        </div>
    )

}


export default UsersPageUnAuthentified