import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { requestArtist, requestSongs } from '../../redux/songsReducer';
import Songs from './Songs'



class SongsContainer extends React.Component {

    render() {
        return (
            <Songs songs = {this.props.songs}/>
        )
    }
    componentDidMount(){
        this.props.setSongs(20)
    }
}




let mapStateToProps = (state) => {
    return {
        songs: state.songsList.songs,
    }
}


export default compose(connect(mapStateToProps, { setSongs: requestSongs}))(SongsContainer)
