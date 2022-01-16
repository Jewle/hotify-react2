import React from 'react'
import Header from "../header/Header";
import Player from "../player/Player";
import RecentlyPlayed from "../recently-played/RecentlyPlayed";
import LeftMenu from "../left-menu/LeftMenu";
import './app.scss'
import TrackList from "../track-list/TrackList";
import {TrackControlContext, TrackServiceProvider} from '../context'
import TrackService from "../../services/TrackService";
import {Provider} from "react-redux";
import store from "../../store";
import TrackControl from "../../services/TrackControl";
import AudioController from "../audio-controller/AudioController";

const audioRef = React.createRef()
export default function App() {
    return (
        <Provider store={store}>
            <TrackServiceProvider value={new TrackService()}>

                <div className="wrapper">
                    <LeftMenu/>
                    <main>

                        <Header/>
                        <RecentlyPlayed/>
                        <TrackList/>
                    </main>
                    <Player/>
                </div>
                <AudioController/>
            </TrackServiceProvider>
        </Provider>
    )
}
