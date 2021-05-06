import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
//import { Field, reduxForm } from 'redux-form'
import styles from './SearchPages.module.css'
import { searchRequest } from '../../redux/songsReducer'



let SearchPage = (props) => {
    const [state, setState] = useState('')


    //const input = useRef()
    const dispatch = useDispatch()

  
    /*useEffect(() => {
        searchRequest()
    })*/


    return (
        <div className={styles.main__block}>
            <div className={styles.form}>
                <div className={styles.form__item}>
                    <input className={styles.search__input} value={state} onChange={(event) => setState(event.target.value)} component={'input'} autoComplete="off" placeholder={"Song's Search"} />
                    <button onClick={()=> dispatch(searchRequest(state))} className={styles.search__btn}>Search</button>
                </div>
            </div>
        </div>
    )
}

//export const InputReduxForm = reduxForm({form: 'inputData'})(SearchPage)

export default SearchPage;