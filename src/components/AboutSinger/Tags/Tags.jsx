import React from 'react'
import styles from '../AboutSingers.module.css'



let Tags = ({ tag }) => {
    return (
        <div className={styles.main__tags_item}>
            <h4>{tag}</h4>
        </div>
    )
}

export default Tags;