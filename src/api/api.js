import * as axios from "axios";


/*const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://ws.audioscrobbler.com/2.0/',
    headers:     {
        "API-KEY": "f28701d385b2ae4c38e3d61054b5845e"
    }
});
*/


export const songsAPI = {
    getSongs(limit){
            return axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=f28701d385b2ae4c38e3d61054b5845e&format=json&limit=${limit}`)
            .then(response => {
                return response.data.tracks.track;
            })
        },
        getArtistData(artist){
            return axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=f28701d385b2ae4c38e3d61054b5845e&format=json&limit=1`)
            .then(response => {
                return response.data.artist;
            })
        },
        getSearchData(word){
            return axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${word}&api_key=f28701d385b2ae4c38e3d61054b5845e&format=json`)
            .then(response => {
                return response.data.results.trackmatches.track;
            })
        }
    }




