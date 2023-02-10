import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import songsReducer from './songsReducer'
import thunkMiddleware from "redux-thunk";
//import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    songsList: songsReducer,
    //form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store;

