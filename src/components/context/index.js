import React from "react";

const {Provider:TrackServiceProvider,Consumer:TrackServiceConsumer} = React.createContext(undefined, undefined)
const TrackControlContext = React.createContext(undefined, undefined)

export {
    TrackServiceProvider,
    TrackServiceConsumer,
    TrackControlContext
}
