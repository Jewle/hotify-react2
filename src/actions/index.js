function trackSwitch(payload) {
    return {
        type:'TRACK_SWITCH',
        payload
    }
}

function trackToggle() {
    return{
        type:'TRACK_TOGGLE'
    }
}
function addPlaylist(payload) {
    return{
        type:'PLAYLIST_ADD',
        payload
    }
}

function attachSongsToPlaylist(payload) {
    return{
        type:'PLAYLIST_ATTACH_SONGS',
        payload
    }
}

export {
    trackSwitch,
    trackToggle,
    addPlaylist,
    attachSongsToPlaylist
}
