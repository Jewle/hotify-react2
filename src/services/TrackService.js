import React from "react";
import data from "../data/data";
import store from "../store";

export default class TrackService {
    tracks = data.tracks
    playlists = store.getState().playlists
    getAllTracks(){
        return this.tracks
    }
    getPlaylistTracks(playlist){
        if (playlist.songs.length===0) return []
        return playlist.songs.map(song=>this.getTrack(song.id))
    }

    getPlayList(playlistId){
        const playlist = this.playlists.find(this._findCb(playlistId))
        if (!playlist) return [];
        const songs = this.getPlaylistTracks(playlist)
        return {...playlist,songs,count:songs.length}
    }
    getTrack = (id)=>{
        const track = this.tracks.find(this._findCb(id))

        if (!track) return
        return track
    }

    _findCb(id){
        return item=>item.id===id
    }
}
