import React, {Component, useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "../../utils";
import withService from "../hoc/withService";
import {Howl} from 'howler';
function AudioController({currentTrack,isTrackPlaying}) {
    useEffect(()=>{
        const audioRef = document.querySelector('audio')
        audioRef.src = currentTrack.src
        isTrackPlaying ? audioRef.play() : audioRef.pause()
    },[currentTrack.id,isTrackPlaying])
    return <div>
        <audio src=""></audio>
    </div>
}


const mapDispatchToProps = {}
const mapStateToProps = ({isTrackPlaying,currentTrack}) => ({
    isTrackPlaying,
    currentTrack
})

export default compose(connect(mapStateToProps,mapDispatchToProps),withService)(AudioController)
