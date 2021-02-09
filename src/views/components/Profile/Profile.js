import React from 'react'
import {Route} from "react-router-dom";

import ProfileNavBar from "./ProfileNavBar/ProfileNavBar";
import ProfileNavBarMobile from "./ProfileNavBarMobile/ProfileNavBarMobile";
import Timeline from "./Timeline/Timeline";


const Profile = () => {
    return (
        <div>
        <div className="timeline-cover">
            <ProfileNavBar/>
            <ProfileNavBarMobile/>
        </div>
            <Route path={'/timeline'} render={() => <Timeline/>}/>
            <Route path={'/about'} render={() => <h1>About</h1>}/>
            <Route path={'/album'} render={() => <h1>Album</h1>}/>
            <Route path={'/friends'} render={() => <h1>Friends</h1>}/>
        </div>
    )
}

export default Profile