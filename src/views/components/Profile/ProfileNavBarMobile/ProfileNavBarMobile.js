import React from 'react'

import ProfileMenu from "../ProfileNavBar/ProfileMenu/ProfileMenu";
import ProfileFollowBtn from "../ProfileNavBar/ProfileFollow/ProfileFollowBtn/ProfileFollowBtn";
import ProfileInfo from "../ProfileNavBar/ProfileInfo/ProfileInfo";

const ProfileNavBarMobile = () => {
    return (
        <div className="navbar-mobile hidden-lg hidden-md">

            <ProfileInfo/>

            <div className="mobile-menu">

                <ProfileMenu/>

                <ProfileFollowBtn/>
            </div>

        </div>


    )
}

export default ProfileNavBarMobile