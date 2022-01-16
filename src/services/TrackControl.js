import {Howl} from 'howler'
export default class TrackControl {
    audioRef = null
    constructor(audioRef){

        this.audioRef =document.querySelector('audio')

    }

    play(){
        this.audioRef = document.querySelector('audio')
        this.audioRef.play()
    }
    pause(){
        this.audioRef.pause()
    }
}
