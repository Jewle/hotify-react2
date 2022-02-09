import TrackList from "../track-list/TrackList";
import React from "react";
import AddTracks from "../add-tracks/AddTracks";

export default function TrackListView({numberOfTracks,addSongs,playlist,trackListType}) {

    if (numberOfTracks>0){
        return <TrackList type={trackListType} tracks={playlist.songs}/>
    }
    return  <AddTracks addSongs={addSongs} playlist={playlist}/>
}
