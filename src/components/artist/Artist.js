import React from "react";
import Header from "../header/Header";
import withService from "../hoc/withService";
import TrackListView from "../track-list-view/TrackListView";

function Artist(props) {
    const {service} = props
    const tracks = service.getAllTracks()
    return(
        <div className='artist'>
            <Header type='artist' artistInfo={{
                name:'Bad Omens',
                monthListeners:10000,
                isVerified:true
            }}/>
            <TrackListView trackListType='stats' tracks={tracks}/>
        </div>
    )
}

export default withService(Artist)
