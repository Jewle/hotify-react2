import React from "react";
import './demo-playlist.scss'
import {Link} from "react-router-dom";

function DemoPlaylist({playlist:{description,name,id,image}}) {
    return <div className='demo-playlist'>
            <div className="demo-playlist-content">
                <Link to={`/playlist/${id}`}>
                    <img src={image} alt=""/>
                </Link>
                <h4 className='demo-playlist-header'>{name}</h4>
                <p className='demo-playlist-desc'>{description}</p>
            </div>
    </div>
}

export default DemoPlaylist
