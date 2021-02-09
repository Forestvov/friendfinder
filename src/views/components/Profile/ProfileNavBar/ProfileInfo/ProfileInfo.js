import React from 'react'

import UserAvatar from "../../../User/UserAvatar/UserAvatar";

const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <UserAvatar styleClass={"img-responsive profile-photo"}/>
            <h3>Sarah Cruiz</h3>
            <p className="text-muted">Creative Director</p>
        </div>
    )
}

export default ProfileInfo