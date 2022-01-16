import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "../../utils";
import withService from "../hoc/withService";
import {Howl} from 'howler';
class AudioController extends Component{
    audioRef = React.createRef()
    componentDidMount() {

        this.audioRef = document.querySelector('audio')

    }
//Поправить isTrackPlaying
    render() {
        const {isTrackPlaying,service,currentTrackId} = this.props
        const {src} = service.getTrack(currentTrackId)



        // isTrackPlaying ? this.audioRef.play() : this.audioRef.pause()
        this.audioRef.src = src
        this.audioRef.addEventListener('canplay',()=>{
            this.audioRef.play()
        })

        return(
           <div>
               <audio src=''
                      preload='none'>
               </audio>

           </div>
        )
    }
}

const mapDispatchToProps = {}
const mapStateToProps = ({isTrackPlaying,currentTrackId}) => ({
    isTrackPlaying,
    currentTrackId
})

export default compose(connect(mapStateToProps,mapDispatchToProps),withService)(AudioController)
