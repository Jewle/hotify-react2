import React, {useContext} from 'react';
import {connect} from "react-redux";
import {trackToggle} from "../../actions";
import TrackToggle from "../track-toggle/TrackToggle";
import {TrackControlContext} from "../context";
 function PlayerControls({trackToggle,isPlaying}) {


    return (
        <div className="footer-middle">
            <div className="track-controls-container">
                <div className="track-controls">
                    <button>
                        <svg role="img" height="16" width="16" viewBox="0 0 16 16"
                             className="Svg-sc-1bi12j5-0 hDgDGI">
                            <path
                                d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"></path>
                        </svg>
                    </button>
                    <button>
                        <svg role="img" height="16" width="16" viewBox="0 0 16 16"
                             className="Svg-sc-1bi12j5-0 hDgDGI">
                            <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path>
                        </svg>
                    </button>
                    <button className="track-toggle" onClick={()=>{
                        trackToggle()
                    }}>
                        <TrackToggle isTrackPlaying={isPlaying}/>
                    </button>
                    <button>
                        <svg role="img" height="16" width="16" viewBox="0 0 16 16"
                             className="Svg-sc-1bi12j5-0 hDgDGI">
                            <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z">
                            </path>
                        </svg>
                    </button>

                    <button>
                        <svg role="img" height="16" width="16" viewBox="0 0 16 16"
                             className="Svg-sc-1bi12j5-0 hDgDGI">
                            <path
                                d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="track-playback">
                <div className="track-playback-elapsed-time">
                    1:08
                </div>
                <div className="track-playback-bar">
                    <div className="progress"></div>
                </div>
                <div className="track-playback-elapsed-time">
                    3:20
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=({isTrackPlaying})=>{
    return {
        isPlaying:isTrackPlaying
    }
}
const mapDispatchToProps = {
     trackToggle
}
export default connect(mapStateToProps,mapDispatchToProps)(PlayerControls)
