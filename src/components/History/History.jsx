import React from "react";
import { nanoid } from "nanoid";
import styles from '../SearchPage/SearchPages.module.css'
import { useSelector } from "react-redux";


let History = () => {

    const history = useSelector((state) => state.songsList.history);


    return (
        <div className={styles.main__block}>
            {history.map(item =>
                <div key={nanoid()} className={styles.main__items}>
                    <h3 className={styles.text}>{item}</h3>
                </div>

            )}
        </div>
    );
}


export default History;