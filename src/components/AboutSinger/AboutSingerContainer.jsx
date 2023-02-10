import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestArtist } from '../../redux/songsReducer';
import AboutSinger from './AboutSingers';




class AboutSingerContainer extends React.Component {

    render() {
        return (
            <AboutSinger artist = {this.props.artist}/>
        )
    }
    /*componentDidUpdate(){
        this.props.setArtist()
    }
    */
}





let mapStateToProps = (state) => {
    return {
       artist: state.songsList.artist,
    }
}


export default compose(connect(mapStateToProps, {setArtist: requestArtist}))(AboutSingerContainer)