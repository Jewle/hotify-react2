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

export {
    trackSwitch,
    trackToggle
}
