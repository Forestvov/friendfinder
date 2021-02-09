import React from 'react'

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import ProfileFollow from "./ProfileFollow/ProfileFollow";

const ProfileNavBar = () => {
    return (
        <div className="timeline-nav-bar hidden-sm hidden-xs">
            <div className="row">
                <div className="col-md-3">

                    <ProfileInfo/>

                </div>
                <div className="col-md-9">

                    <ProfileMenu styleClass={"profile-menu"}/>

                    <ProfileFollow/>

                </div>
            </div>
        </div>
    )
}

export default ProfileNavBar