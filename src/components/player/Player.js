import React, {useState} from 'react';
import './player.scss'
import PlayerTrackDisplay from "../player-track-display/PlayerTrackDisplay";
import PlayerMisc from "../player-misc/PlayerMisc";
import PlayerControls from "../player-controlls/PlayerControls";
import {connect} from "react-redux";
import {compose} from '../../utils/index'
import withService from "../hoc/withService";

function Player (props) {
    console.log(props)
    const {track} = props




    return (
        <div className="footer-player-container">
            <footer>
                <PlayerTrackDisplay track={track}/>
                <PlayerControls track={track}/>
                <PlayerMisc track={track}/>
            </footer>
        </div>
    )
}
const mapStateToProps=({currentTrack})=>{
    return {
        track:currentTrack
    }
}
const mapDispatchToProps = (dispatch)=>{
   return  {
       playTrack(){

    }}
}
export default compose(withService,connect(mapStateToProps,mapDispatchToProps))(Player)
