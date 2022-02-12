import React from "react";
import DemoPlaylist from "./demo-playlist/DemoPlaylist";
import './demo-playlists.scss'
function DemoPlaylists({playlists}) {
    return <div className="main-container">
        <h1>Плейлисты для тебя</h1>
            <div className="demo-playlists">
                {playlists.map((playlist)=>{
                    return <DemoPlaylist key={playlist.id} playlist={playlist}/>
                })}
            </div>
          </div>
}

export default DemoPlaylists
