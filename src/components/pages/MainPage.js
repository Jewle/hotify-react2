import React from "react";
import Header from "../header/Header";
import RecentlyPlayed from "../recently-played/RecentlyPlayed";
import TrackList from "../track-list/TrackList";


function MainPage() {
    return(
        <React.Fragment>
            <Header/>
            <RecentlyPlayed/>
        </React.Fragment>
    )
}

export default MainPage
