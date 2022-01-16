
const initialState = {
    currentTrackId: 0,
    isTrackPlaying:false
}

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
