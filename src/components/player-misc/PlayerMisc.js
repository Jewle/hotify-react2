import React from 'react';
export default function PlayerMisc() {
    return (
        <div className="footer-right">
            <button>
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI">
                    <path d="M2 2v5l4.33-2.5L2 2zm0 12h14v-1H2v1zm0-4h14V9H2v1zm7-5v1h7V5H9z"></path>
                </svg>
            </button>
            <button>
                <svg role="img" height="16" width="16" aria-label="Подключиться к устройству"
                     viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI">
                    <path
                        d="M12 .999H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V2c0-.55-.45-1.001-1-1.001zM12 14H4V2h8v12z"></path>
                    <circle cx="7.984" cy="12.482" r=".75"></circle>
                </svg>
            </button>
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
