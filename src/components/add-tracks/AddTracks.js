import React from "react";
import withService from "../hoc/withService";

import AddTracksSearching from "../add-tracks-searching/AddTracksSearching";
function AddTracks({service,addSongs,playlistId}) {
    const tracks = service.getAllTracks()
    return (
        <div className='add-tracks'>
            <h1 className="title-1" style={{marginBottom:'15px'}}>Давай добавим что-нибудь в твой плейлист</h1>
            <input placeholder='Поиск треков' className='add-tracks-input' type="text"/>
            <AddTracksSearching playlistId={playlistId} addSongs={addSongs} tracks={tracks}/>
        </div>
    )
}

export default withService(AddTracks)
