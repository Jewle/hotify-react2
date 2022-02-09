import React from 'react';
import './track-list.scss'
import TrackListItem from "../track-list-item/TrackListItem";



 function TrackList ({tracks=[],type,numberOfTracks}) {



     if (numberOfTracks===0){
         return (
             <div>
                 Пока нет треков здесь
             </div>
         )
     }
    return (
        <div className="track-list-wrapper">
            <section className="track-list">
                {type!=='stats'
                && <div className="track-list-header">
                    <div className="track-list-header-item">#</div>
                    <div className="track-list-header-item">НАЗВАНИЕ</div>
                    <div className="track-list-header-item">АЛЬБОМ</div>
                    <div className="track-list-header-item">ДАТА ДОБАВЛЕНИЯ</div>
                    <div className="track-list-header-item">ЧАСИКИ</div>
                </div>
                }

                <ul className="track-set">
                    {tracks.map((track,index)=>{
                        return <li key={track.id} className="track-set-item">
                            <TrackListItem type={type} track={track} index={index}/>
                        </li>
                    })}

                </ul>
            </section>
        </div>
    )
}

export default TrackList
