import React from 'react';
import './recently-played.scss'
import RecentlyPlayedCard from "../recenltly-played-card/RecentlyPlayedCard";
export default function RecentlyPlayed () {
    return (
        <div className="home-page-wrapper">
            <div className="section-bg"></div>
            <section className="home-page main-container">
                <section className="hello">
                    <div className="hello-title title-1">
                        Добрый день
                    </div>
                    <div className="hello-playlists">
                        <RecentlyPlayedCard/>
                        <RecentlyPlayedCard/>
                        <RecentlyPlayedCard/>
                        <RecentlyPlayedCard/>
                        <RecentlyPlayedCard/>
                        <RecentlyPlayedCard/>

                    </div>
                </section>
            </section>
        </div>
    )
}
