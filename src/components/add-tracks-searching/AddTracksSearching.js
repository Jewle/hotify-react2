import React, {useState} from "react";
import './add-tracks-searching.scss'
import AddTrackSearchingItem from "../add-tracks-searching-item/AddTracksSearchingItem";

function AddTracksSearching(props) {
    const {tracks,addSongs,playlistId:id} =props
    const [addedTracks, addTrack] = useState([])
    console.log(id)

    const setTrack = (id)=>{
        addTrack(state=>{
            if (state.includes(id)){
                return state.filter(item=>item!==id)
            }
            return [...state,id]
        })
    }

    return (<div className='add-tracks-searching'>
        {tracks.map(track=>{
            const markedTrack =addedTracks.includes(track.id)
            return <AddTrackSearchingItem isMarked={markedTrack} setTrack={setTrack} key={track.id} track={track}/>
        })}

        <button onClick={()=>addSongs({id,songs:addedTracks})}>Сохранить </button>
    </div>)
}

export default AddTracksSearching
