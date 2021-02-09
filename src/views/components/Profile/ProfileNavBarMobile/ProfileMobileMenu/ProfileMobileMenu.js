import React from 'react'

const ProfileMobileMenu = () => {
    return (
        <div className="mobile-menu">
            <ul className="list-inline">
                <li><a href="timline.html" className="active">Timeline</a></li>
                <li><a href="timeline-about.html">About</a></li>
                <li><a href="timeline-album.html">Album</a></li>
                <li><a href="timeline-friends.html">Friends</a></li>
            </ul>
            <button className="btn-primary">Add Friend</button>
        </div>
    )
}

export default ProfileMobileMenu