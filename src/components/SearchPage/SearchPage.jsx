import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { Field, reduxForm } from 'redux-form'
import styles from './SearchPages.module.css'
import { searchRequest } from '../../redux/songsReducer'



let SearchPage = (props) => {
    const [state, setState] = useState("")

    
    const dispatch = useDispatch()

    let history = useSelector(state => state.songsList.history)[0]

    function handleKeyPress(e){
        if(e.key === "Enter"){
            dispatch(searchRequest(e.target.value));
        }
    }

    function buttonState(){
        if([...new Set(state.split(""))].join("") != ""){
            return dispatch(searchRequest(state));
        } 
    }

    let inputValue = history != null ? history : "Song's Search";
   
    /*useEffect(() => {
        searchRequest()
    })*/

    return (
        <div className={styles.main__block}>
            <div className={styles.form}>
                <div className={styles.form__item}>
                    <input className={styles.search__input} value={state} onChange={(event) => setState(event.target.value)} onKeyPress = {(e) => handleKeyPress(e)} component={'input'} autoComplete="off" placeholder={inputValue} />
                    <button onClick = {() =>  buttonState()} className={styles.search__btn}>Search</button>
                </div>
            </div>
        </div>
    )
}

//export const InputReduxForm = reduxForm({form: 'inputData'})(SearchPage)

export default SearchPage;