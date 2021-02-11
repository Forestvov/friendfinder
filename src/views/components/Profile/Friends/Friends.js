import React from 'react'

import Friend from "./Friend/Friend";

const Friends = ({users}) => {
    return (
        <div>
            <div className="friend-list">
                <div className="row">
                    {users
                        .filter((u) => u.isFriend)
                        .map( (u) => <Friend
                        userFirstName={u.userFirstName}
                        userLastName={u.userLastName}
                        userAvatar={u.userAvatar}
                        userSpecialization={u.userSpecialization}
                        key={u.userID}/>)}
                </div>
            </div>
        </div>
    )
}

export default Friends