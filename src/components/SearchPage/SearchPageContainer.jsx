import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import SearchPages from './SearchPages';




let mapStateToProps = (state) => {
    return {
        tracks: state.songsList.tracks
    }
}





export default compose(connect(mapStateToProps))(SearchPages)
