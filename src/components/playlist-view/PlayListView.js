import React, {useEffect, useState} from "react";
import './playlists-view.scss'
import {connect} from "react-redux";
import {compose} from "../../utils";
import Header from "../header/Header";
import UserWidget from "../user-widget/UserWidget";
import withService from "../hoc/withService";
import TrackListView from "../track-list-view/TrackListView";
import {attachSongsToPlaylist} from "../../actions";

function PlaylistsView(props) {
    const {service,addSongs} = props
    const {id} = props.match.params
    const [playlist,setPlaylist] = useState({songs:[],title:'',count:1})
    // const {title,count} = service.getPlaylistInfo(id)
    const {title,count} = playlist
    console.log(playlist)

     useEffect(()=>{

         service.getPlayList(id)
             .then(playlist=>setPlaylist(playlist))

     },[id])




    return (
        <div className='playlists-view'>
            <Header/>



            <div className="playlist-title-container">
                <div className="section-bg"></div>
                <div className="main-container">
                    <div className="playlist-features">

                        <div className="playlist-cover">
                            <img src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="dd"/>
                        </div>
                        <div className="playlist-title">

                            <h6 className="playlist-type">ПЛЕЙЛИСТ</h6>
                            <h1 className='playlist-header'>{title}</h1>
                            <div className="playlist-info">
                                <div className="user-container">
                                    <UserWidget/>
                                </div>
                                <p className='tracks-count'>*{count} трека (ов)</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="playlist-actions">
                <div className="main-container">
                    SOME ACTIONS
                </div>
            </div>

            <div className="main-container">
                <TrackListView  addSongs={addSongs} numberOfTracks={count} playlist={playlist}/>
            </div>

        </div>
    )
}
const mapStateToProps = (state)=>{
    return {

    }
}

const mapDispatchToProps = {
    addSongs:attachSongsToPlaylist
}
export default compose(connect(mapStateToProps,mapDispatchToProps),withService)(PlaylistsView)
