import React from 'react'
import {Route} from "react-router-dom";

import ProfileNavBar from "./ProfileNavBar/ProfileNavBar";
import ProfileNavBarMobile from "./ProfileNavBarMobile/ProfileNavBarMobile";
import Timeline from "./Timeline/Timeline";
import About from "./About/About";
import Album from "./Album/Album";
import Friends from "./Friends/Friends";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar";


const Profile = () => {
    return (
        <div>
            <div className="timeline-cover">
                <ProfileNavBar/>
                <ProfileNavBarMobile/>
            </div>
            <div id="page-contents">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-7">
                        <Route path={'/timeline'} render={() => <Timeline/>}/>
                        <Route path={'/about'} render={() => <About/>}/>
                        <Route path={'/album'} render={() => <Album/>}/>
                        <Route path={'/friends'} render={() => <Friends/>}/>
                    </div>
                    <ProfileSideBar/>
                </div>
            </div>
        </div>
    )
}

export default Profile