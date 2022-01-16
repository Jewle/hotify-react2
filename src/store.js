import {createStore} from "redux";
import {TrackControlReducer} from "./reducers";

const store = createStore(TrackControlReducer)

export default store
