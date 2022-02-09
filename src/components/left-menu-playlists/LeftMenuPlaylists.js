import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function LeftMenuPlaylists(props) {
    const {playlists} = props


    return (

        <React.Fragment>
            <div className="playlist-shadow"></div>
            <div className="playlists">
                <ul>
                    {playlists.map(playlist=>{
                        if (playlist.id==='fav') return null
                        const link = `/playlist/${playlist.id}`
                        return(
                        <li key={playlist.id}>
                            <Link to={link}>{playlist.title}</Link>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>

    )
}
const mapStateToProps = (state)=>{
    return{
        playlists:state.playlists
    }
}
export default connect(mapStateToProps)(LeftMenuPlaylists)

