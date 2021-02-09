import React from 'react'

import ProfileFollowBtn from "./ProfileFollowBtn/ProfileFollowBtn";

const ProfileFollow = () => {
    return (
        <ul className="follow-me list-inline">
            <li>1,299 people following her</li>
            <li>
                <ProfileFollowBtn/>
            </li>
        </ul>
    )
}

export default ProfileFollow