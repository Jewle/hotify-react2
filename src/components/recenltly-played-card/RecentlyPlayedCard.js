import React from 'react';

export default function RecentlyPlayedCard () {
    return (
        <div className="hello-playlist-card">
            <div className="hello-playlist-card-content">
                <div className="playlist-cover cover-rounded">
                    <img className="cover-rounded"
                         src="https://i.scdn.co/image/ab67616d0000b273e2818b40ea71ea97b3314e84" alt=""/>
                </div>
                <div className="playlist-name">
                    TO U
                </div>
                <button className="playlist-playButton roundedButton activated-bg">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true">
                        <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor">
                        </polygon>
                    </svg>
                </button>
            </div>
        </div>
    )
}
