import React, {useContext} from 'react';
import {connect} from "react-redux";
import {trackSwitch, trackToggle} from "../../actions";
import TrackToggle from "../track-toggle/TrackToggle";


 function TrackListItem(props) {

    const {trackCover,
           trackDuration,
           addingDate,
           artistName,
           trackName,
           album,id} = props.track
     const {trackSwitch,trackPlaying,currentTrack,type} = props
     const isActive = currentTrack.id=== id
    return (
        <ul className="track-set-item-data">
            <button className="track-item-play" onClick={()=>{
                trackSwitch(props.track)

            }}>
                <TrackToggle id={id} currentTrackId={currentTrack.id} isTrackPlaying={trackPlaying}/>
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
            {type!=='stats'&&<React.Fragment>
                <li className="tdata">{album}</li>
                <li className="tdata">{addingDate}</li>
                <li className="tdata">{trackDuration}</li>
            </React.Fragment>}
        </ul>
    )
}
const mapStateToProps = ({currentTrack,isTrackPlaying})=> {
     return {
         currentTrack,
         trackPlaying:isTrackPlaying
     }
}
const mapDispatchToProps = {
     trackSwitch,
     trackToggle
}

export default connect(mapStateToProps,mapDispatchToProps)(TrackListItem)
