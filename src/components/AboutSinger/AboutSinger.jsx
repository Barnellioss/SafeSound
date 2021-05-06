import { nanoid } from 'nanoid'
import React from 'react'
import styles from './AboutSingers.module.css'
import Tags from './Tags/Tags'



let AboutSinger = ({ image, artistName, text, tags }) => {

    let tagCalling = tags.map(d => <Tags key={nanoid()} tag={d} />)


    return (
            <div className={styles.main__items__container}>
                <div className={styles.main__items}>
                    <div className={styles.main__item, styles.main__image_block}>
                        <div>
                        <img src={image} alt="artist-image"/>
                        </div>
                        <div>                      
                            <h3 className={styles.main__item_header}>{artistName}</h3>
                        </div>
                    </div>
                    <div className={styles.main__item}>
                        <p className={styles.main__text}>
                            {text}
                        </p>
                    </div>
                    <div className={styles.main__item, styles.main__tags_grid }>
                        {tagCalling}
                    </div>
                </div >
            </div >
    )
}

export default AboutSinger;
