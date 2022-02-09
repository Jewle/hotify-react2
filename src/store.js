import {createStore} from "redux";
import {TrackControlReducer} from "./reducers";

const store = createStore(TrackControlReducer)

store.subscribe(()=>{
    localStorage.setItem('state', JSON.stringify(store.getState()))
})


export default store




