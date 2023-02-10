import React from 'react'
import { songsAPI } from '../api/api'


const SET_SONGS = 'SET_SONGS';
const SET_AUTHOR = 'SET_AUTHOR';
const SET_SONG = 'SET_SONG';
const SET_TRACKS = 'SET_TRACKS';
const SET_FAVORITE = 'SET_FAVORITE';
const DELETE_FAVORITE = 'DELETE_FAVORITE';
const SET_ALBUMS = 'SET_ALBUMS';



let initialState = {
    songs: [],
    artist: [],
    song: [],
    tracks: [],
    favorite: [],
    albums: [],
    history: []
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
        case SET_SONG:
            return {
                ...state,
                song: action.song
            }
        case SET_TRACKS:
            return {
                ...state,
                tracks: action.track,
                history: [...new Set([action.word, ...state.history])]
            }
        case SET_FAVORITE:
            return {
                ...state,
                favorite: [...state.favorite, action.favorite]
            }
        case SET_ALBUMS: 
            return {
                ...state,
                albums: action.albums
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
export const setTracks = (track, word) => ({ type: SET_TRACKS, track, word });
export const setFavorite = (favorite) => ({ type: SET_FAVORITE, favorite });
export const deleteFavorite = (song, artist) => ({ type: DELETE_FAVORITE, song, artist});
export const setAlbums = (albums) => ({type: SET_ALBUMS, albums});
export const setSong = (song) => ({type: SET_SONG, song});


export const requestSongs = (number) => {
    return async (dispatch) => {
        let response = await songsAPI.getSongs(number)
        dispatch(setSongs(response)) 
    }
}

export const requestSong = (artist, song) => {
    return async (dispatch) => {
        let response = await songsAPI.getTrackInfo(artist, song)
        dispatch(setSong(response))
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
        dispatch(setTracks(response, word))
    }
}

export const getAlbums = (artist) => {
    return async (dispatch) => {
        let response = await songsAPI.getAlbums(artist)
        dispatch(setAlbums(response))
    }
}


export default songsReducer;


//let call = songsAPI.getArtistData("Starset")
