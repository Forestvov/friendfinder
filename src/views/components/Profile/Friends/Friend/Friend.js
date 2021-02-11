import React from 'react'
import UserAvatar from "../../../User/UserAvatar/UserAvatar";

const Friend = ({userFirstName, userLastName, userAvatar, userSpecialization}) => {
    return (
        <div className="col-md-6 col-sm-6">
            <div className="friend-card">
                <img src="http://placehold.it/1030x360" alt="profile-cover" className="img-responsive cover"/>
                <div className="card-info">
                    <UserAvatar userAvatarUrl={userAvatar} styleClass={"profile-photo-lg"}/>
                    <div className="friend-info">
                        <a href="#" className="pull-right text-green">My Friend</a>
                        <h5><a href="timeline.html" className="profile-link">{userFirstName} {userLastName}</a></h5>
                        <p>{userSpecialization}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Friend