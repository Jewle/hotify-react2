import React from "react";
import './playlists-view.scss'
import {connect} from "react-redux";
import {compose} from "../../utils";
import Header from "../header/Header";
import UserWidget from "../user-widget/UserWidget";
import TrackList from "../track-list/TrackList";
import withService from "../hoc/withService";

function PlaylistsView(props) {
    const {service} = props
    const {id} = props.match.params
    const {songs:tracks,title,count} = service. getPlayList(+id)





    return (
        <div className='playlists-view'>
            <Header/>
            <div className="section-bg"></div>
            <div className="playlist-title-container main-container">

                <div className="playlist-features">
                    <div className="playlist-cover">
                        <img src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="dd"/>
                    </div>
                    <div className="playlist-title">
                        <h6 className="playlist-type">ПЛЕЙЛИСТ</h6>
                        <h1 className='playlist-header'>{title}</h1>
                    </div>
                </div>
                <div className="playlist-info">
                    <UserWidget/>
                    <p>*{count} трека (ов)</p>
                </div>
            </div>
           <TrackList tracks={tracks}/>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {

    }
}
export default compose(connect(mapStateToProps), withService)(PlaylistsView)
