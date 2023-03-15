import React from "react"
import { useSelector } from "react-redux"
import SearchPages from "../SearchPage/SearchPages"



let Country = () => {
    let tracks = useSelector((state) => state.songsList.topTracks)

    return (
        <div>
            <SearchPages tracks={tracks} country = {true}/>
        </div>
    )

}

export default Country