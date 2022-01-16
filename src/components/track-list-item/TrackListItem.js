import React, {useContext} from 'react';
import {connect} from "react-redux";
import {trackSwitch, trackToggle} from "../../actions";
import TrackToggle from "../track-toggle/TrackToggle";
import {TrackControlContext} from "../context";


 function TrackListItem(props) {

    const {trackCover,trackDuration,addingDate,artistName,trackName, album,id} = props.track
     const {trackSwitch,trackPlaying,trackId} = props
     const isActive = trackId === id




    return (
        <ul className="track-set-item-data">
            <button className="track-item-play" onClick={()=>{
                trackSwitch(id)

            }}>
                <TrackToggle id={id} currentTrackId={trackId} isTrackPlaying={trackPlaying}/>
            </button>
            <li className="tdata"><span className='track-number'>{props.index+1}</span></li>
            <li className="tdata">
                <div className="track-data-cover">
                    <img src={trackCover} alt=""/>
                </div>
                <div className="track-title">
                    <span className={isActive ? 'active-track' : ''}>{trackName}</span>
                    <span className="band-name"><a href="#">{artistName}</a></span>
                </div>
            </li>
            <li className="tdata">{album}</li>
            <li className="tdata">{addingDate}</li>
            <li className="tdata">{trackDuration}</li>
        </ul>
    )
}
const mapStateToProps = ({currentTrackId,isTrackPlaying})=> {
     return {
         trackId:currentTrackId,
         trackPlaying:isTrackPlaying
     }
}
const mapDispatchToProps = {
     trackSwitch,
     trackToggle
}

export default connect(mapStateToProps,mapDispatchToProps)(TrackListItem)
