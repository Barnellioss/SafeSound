import * as axios from "axios";


/*const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://ws.audioscrobbler.com/2.0/',
    headers:     {
        "API-KEY": "f28701d385b2ae4c38e3d61054b5845e"
    }
});
*/
export const KEY = "5267d4ca0f793de206acf468f0fd2401"


export const songsAPI = {
    getSongs(limit) {
        return axios.get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${KEY}&format=json&limit=${limit}`)
            .then(response => {
                return response.data.tracks.track;
            })
    },
    getArtistData(artist) {
        return axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${KEY}&format=json&limit=1`)
            .then(response => {
                return response.data.artist;
            })
    },
    getSearchData(word) {
        return axios.get(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${word}&api_key=${KEY}&format=json`)
            .then(response => {
                return response.data.results.trackmatches.track;
            })
    },
    getAlbums(artist) {
        return axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${KEY}&format=json`)
            .then(response => {
                return response.data.topalbums.album;
            })
    },
    getTrackInfo(author, song) {
        return axios.get(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${KEY}&artist=${author}&track=${song}&format=json`)
            .then(response => {
                return response.data.track
            })
    },

    getTopCountryTracks(country) {
        return axios.get(` https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=${KEY}&format=json`)
            .then(response => {
                return response.data.tracks.track
            })
    },



}





