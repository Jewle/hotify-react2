import React from 'react';
import './track-list.scss'
import TrackListItem from "../track-list-item/TrackListItem";
import withService from "../hoc/withService";


 function TrackList ({service}) {
     const tracks = service.getAllTracks()
    return (
        <div className="track-list-wrapper">
            <section className="track-list">
                <div className="track-list-header">
                    <div className="track-list-header-item">#</div>
                    <div className="track-list-header-item">НАЗВАНИЕ</div>
                    <div className="track-list-header-item">АЛЬБОМ</div>
                    <div className="track-list-header-item">ДАТА ДОБАВЛЕНИЯ</div>
                    <div className="track-list-header-item">ЧАСИКИ</div>
                </div>
                <ul className="track-set">
                    {tracks.map((track,index)=>{
                        return <li key={track.id} className="track-set-item">
                            <TrackListItem track={track} index={index}/>
                        </li>
                    })}

                </ul>
            </section>
        </div>
    )
}

export default withService(TrackList)
