import React from 'react'

import Player from "../player/Player";

import LeftMenu from "../left-menu/LeftMenu";
import './app.scss'

import {TrackControlContext, TrackServiceProvider} from '../context'
import TrackService from "../../services/TrackService";
import {Provider} from "react-redux";
import store from "../../store";

import AudioController from "../audio-controller/AudioController";

import PlayListView from "../playlist-view/PlayListView";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom"
import MainPage from "../pages/MainPage";
import Artist from "../artist/Artist";



export default function App() {
    return (

        <Provider store={store}>
            <BrowserRouter>
            <TrackServiceProvider value={new TrackService()}>

                <div className="wrapper">
                    <LeftMenu/>
                    <main>


                           <Switch>
                               <Route exact path='/playlist/:id' component={PlayListView}/>
                                <Route exact path='/' component={MainPage}/>
                                <Route exact path='/collection/:id' component={PlayListView}/>
                                <Route exact path='/artist' component={Artist}/>
                           </Switch>


                    </main>
                    <Player/>
                </div>
                <AudioController/>
            </TrackServiceProvider>
            </BrowserRouter>
        </Provider>
    )
}
