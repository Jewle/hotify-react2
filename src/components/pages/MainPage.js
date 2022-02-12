import React, {useEffect, useState} from "react";
import Header from "../header/Header";
import RecentlyPlayed from "../recently-played/RecentlyPlayed";
import withService from "../hoc/withService";
import DemoPlaylists from "../demo-playlists/DemoPlaylists";



function MainPage({service}) {


    const [playlists,setPlayLists] = useState([])

    useEffect(()=>{
        service.getDemoPlaylists().then(setPlayLists)

    },[])


    return(
        <React.Fragment>
            <Header/>
            <RecentlyPlayed/>
            <DemoPlaylists playlists={playlists}/>
        </React.Fragment>
    )
}

export default withService(MainPage)
