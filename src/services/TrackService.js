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
    getDemoPlaylists(){
        return this.spot.demoPlaylists()
    }
    getDemoPlaylistTracks(id){
        return this.spot.demoPlaylistTracks(id)
    }
     async getPlayList(playlistId){

        const {playlists} = store.getState()
        const playlist = this._find(playlists,playlistId)

        if (!playlist) return this.getDemoPlaylistTracks(playlistId);

        const songIds = playlist.songs.map(song=>song.id)
        const songs = await this.spot.getTracksByIds(songIds)
        return {...playlist,songs,count:songs.length}
    }

    isInFav(id){
        const {playlists} = store.getState()
        const favPlaylist = this._find(playlists,'fav')
        return favPlaylist.songs.includes(id)
    }

    _findCb = (id)=>{
        !isNaN(+id) && (id=+id)
        return item=>item.id===id
    }
    _find = (array,id) => array.find(this._findCb(id))

}
