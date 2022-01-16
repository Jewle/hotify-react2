import React from 'react';

export default function PlayerTrackDisplay({track:{trackCover,artistName,trackName}}) {

    return (
        <div className="footer-left">
            <div className="artist-cover">
                <img src={trackCover} alt=""/>
            </div>
            <div className="track-data">
                <div className="track-data-item"><a href="">{trackName}</a></div>
                <div className="track-data-item"><a href="">{artistName}</a></div>
            </div>
            <div className="track-misc">
                <button>
                    <svg role="img" height="16" width="16" viewBox="0 0 16 16"
                         className="Svg-sc-1bi12j5-0 hDgDGI">
                        <path fill="none" d="M0 0h16v16H0z">
                        </path>
                        <path
                            d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z">
                        </path>
                    </svg>
                </button>
                <button>
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <g fill="currentColor" fill-rule="evenodd">
                            <path
                                d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                                fill-rule="nonzero"></path>
                            <path d="M10 8h4v3h-4z"></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}
