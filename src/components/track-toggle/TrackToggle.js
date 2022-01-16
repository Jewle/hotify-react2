import React from 'react'
import './track-toggle.scss'

function TrackToggle({isTrackPlaying,id,currentTrackId}) {
    if(isTrackPlaying && id===currentTrackId){
        return (
            <svg role="img" height="16" width="16" viewBox="0 0 16 16"
                 className="Svg-sc-1bi12j5-0 hDgDGI">
                <path fill="none" d="M0 0h16v16H0z"></path>
                <path d="M3 2h3v12H3zm7 0h3v12h-3z">
                </path>
            </svg>
        )
    }
    return (
        <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true">
            <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor">

            </polygon></svg>
    )
}

export default TrackToggle
