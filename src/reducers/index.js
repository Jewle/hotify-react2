
const initialState = {
    currentTrackId: 2,
    isTrackPlaying:false,
    playlists:[
        {
            title:'HA$$ANSHIK',
            id:0,
            songs:[
                {id:1},
                {id:2}
            ]
        },
        {
            title:'Metallic',
            id:1,
            songs:[
                {id:0},
                {id:4}
            ]
        }
    ]
}
const localStorageData = JSON.parse(localStorage.getItem('state'))

function TrackControlReducer(state = initialState,action) {
    switch (action.type) {
        case 'TRACK_SWITCH':{
            const isTrackPlaying = state.currentTrackId === action.payload ? !state.isTrackPlaying : true
            return{
                ...state,
                currentTrackId:action.payload,
                isTrackPlaying

            }
        }
        case 'TRACK_TOGGLE':{
            return {
                ...state,
                isTrackPlaying: !state.isTrackPlaying
            }
        }
        default: return state
    }
}

export {
    TrackControlReducer
}
