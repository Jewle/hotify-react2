const lsState = JSON.parse(localStorage.getItem('state'))
const playlists =
      lsState && lsState.playlists
    ? lsState.playlists
    : [{id:1,title: 'Playlist#1', songs:[]}]


console.log(playlists)
const initialState = {
    currentTrack:{id:2, title:'', artistName:'',trackCover:''},
    isTrackPlaying:false,
    playlists

}





function TrackControlReducer(state=initialState,action) {




    switch (action.type) {
        case 'TRACK_SWITCH':{
            const isTrackPlaying = state.currentTrackId === action.payload ? !state.isTrackPlaying : true
            return{
                ...state,
                currentTrack:action.payload,
                isTrackPlaying

            }
        }
        case 'TRACK_TOGGLE':{
            return {
                ...state,
                isTrackPlaying: !state.isTrackPlaying
            }
        }
        case 'PLAYLIST_ADD':{
            const newId  = state.playlists[state.playlists.length-1].id+1
            const newPlaylist = {
                title:action.payload,
                id:newId,
                songs:[]
            }
            return {
                ...state,
                playlists: [...state.playlists,newPlaylist]
            }
        }
        case 'PLAYLIST_ATTACH_SONGS':{
            let {songs:newSongs,id} = action.payload
            newSongs = newSongs.map(song=>({id:song}))
            const clonedPlaylists = state.playlists.map(plist=>({...plist}))
            const playlist = clonedPlaylists.find(plist=>plist.id===+id)
            playlist.songs = [...playlist.songs,...newSongs]
            return {
                ...state,
                playlists: clonedPlaylists
            }
        }
        default: return state
    }
}

export {
    TrackControlReducer
}
