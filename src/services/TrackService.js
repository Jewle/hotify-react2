import React from "react";
import data from "../data/data";
import store from "../store";
import SpotifyService from "./spotify/SpotifyService";

export default class TrackService {
    tracks = data.tracks

    spot = new SpotifyService()
    getAllTracks(){
        return this.tracks
    }
    getPlaylistTracks(playlist){
        if (playlist.songs.length===0) return []
        return playlist.songs.map(song=>this.getTrack(song.id))
    }

     async getPlayList(playlistId){
         const {playlists} = store.getState()
        const playlist = this._find(playlists,playlistId)
        if (!playlist) return [];
        const songIds = playlist.songs.map(song=>song.id)
        const songs = await this.spot.getTracksByIds(songIds)
         console.log(songs)
        return {...playlist,songs,count:songs.length}
    }

    getPlaylistInfo(id){
        const {playlists} = store.getState()
        const playlist = this._find(playlists,id)
        if (!playlist) return {songs:[], count:4};
        return playlist
     }
    getTrack = (id)=>{
        const track = this._find(this.tracks,id)

        if (!track) return
        return track
    }

    _findCb(id){
        return item=>item.id===id
    }
    _find = (array,id) => array.find(this._findCb(id))

}
