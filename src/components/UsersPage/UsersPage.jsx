import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setToken } from "../../redux/songsReducer";
import styles from '../AboutSinger/AboutSingers.module.css'



export const findToken = (link) => {
    if (link.includes("=") && link.includes("#")) {
        let equal = link.indexOf("=");
        let grate = link.indexOf("#");
        return link.slice(equal + 1, grate);
    }
    else return ""
}

let UsersPage = () => {

    let dispatch = useDispatch();
    let link = document.URL;

    let token = findToken(link);


    useEffect(() => {
        dispatch(setToken(token))
        
    }, [])



    return (
        <div className={styles.user__block}>
            <h3 className={styles.subtitle}>Thank you!!!</h3>
        </div>
    )
}




export default UsersPage