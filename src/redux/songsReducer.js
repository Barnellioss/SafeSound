import React from 'react'
import { songsAPI } from '../api/api'


const SET_SONGS = 'SET_SONGS';
const SET_AUTHOR = 'SET_AUTHOR';
const SET_TRACKS = 'SET_TRACKS';
const SET_FAVORITE = 'SET_FAVORITE';
const DELETE_FAVORITE = 'DELETE_FAVORITE';



let initialState = {
    songs: [],
    artist: [],
    tracks: [],
    favorite: []
}

const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONGS:
            return {
                ...state,
                songs: action.songs
            }
        case SET_AUTHOR:
            return {
                ...state,
                artist: action.artist
            }
        case SET_TRACKS:
            return {
                ...state,
                tracks: action.track
            }
        case SET_FAVORITE:
            return {
                ...state,
                favorite: [...state.favorite, action.favorite]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                favorite: state.favorite.filter(item => item.artist !== action.song && item.song !== action.artist)
            }
        default:
            return state
    }
}

export const setSongs = (songs) => ({ type: SET_SONGS, songs });
export const setArtist = (artist) => ({ type: SET_AUTHOR, artist });
export const setTracks = (track) => ({ type: SET_TRACKS, track })
export const setFavorite = (favorite) => ({ type: SET_FAVORITE, favorite })
export const deleteFavorite = (song, artist) => ({ type: DELETE_FAVORITE, song, artist})


export const requestSongs = (number) => {
    return async (dispatch) => {
        let response = await songsAPI.getSongs(number)
        dispatch(setSongs(response))
    }
}

export const requestArtist = (artist) => {
    return async (dispatch) => {
        let response = await songsAPI.getArtistData(artist)
        dispatch(setArtist([response]))
    }
}

export const searchRequest = (word) => {
    return async (dispatch) => {
        let response = await songsAPI.getSearchData(word)
        dispatch(setTracks(response))
    }
}


export default songsReducer;


//let call = songsAPI.getArtistData("Starset")
//window.caller = call