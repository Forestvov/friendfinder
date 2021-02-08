import React from 'react'

const MenuHeader = () => {
    return (
        <ul className="nav navbar-nav navbar-right main-menu">
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                   aria-haspopup="true"
                   aria-expanded="false">Home <span><img src="images/down-arrow.png" alt=""/></span></a>
                <ul className="dropdown-menu newsfeed-home">
                    <li><a href="index.html">Landing Page 1</a></li>
                    <li><a href="index-register.html">Landing Page 2</a></li>
                </ul>
            </li>
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                   aria-haspopup="true"
                   aria-expanded="false">Newsfeed <span><img src="images/down-arrow.png" alt=""/></span></a>
                <ul className="dropdown-menu newsfeed-home">
                    <li><a href="newsfeed.html">Newsfeed</a></li>
                    <li><a href="newsfeed-people-nearby.html">Poeple Nearly</a></li>
                    <li><a href="newsfeed-friends.html">My friends</a></li>
                    <li><a href="newsfeed-messages.html">Chatroom</a></li>
                    <li><a href="newsfeed-images.html">Images</a></li>
                    <li><a href="newsfeed-videos.html">Videos</a></li>
                </ul>
            </li>
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                   aria-haspopup="true"
                   aria-expanded="false">Timeline <span><img src="images/down-arrow.png" alt=""/></span></a>
                <ul className="dropdown-menu login">
                    <li><a href="timeline.html">Timeline</a></li>
                    <li><a href="timeline-about.html">Timeline About</a></li>
                    <li><a href="timeline-album.html">Timeline Album</a></li>
                    <li><a href="timeline-friends.html">Timeline Friends</a></li>
                    <li><a href="edit-profile-basic.html">Edit: Basic Info</a></li>
                    <li><a href="edit-profile-work-edu.html">Edit: Work</a></li>
                    <li><a href="edit-profile-interests.html">Edit: Interests</a></li>
                    <li><a href="edit-profile-settings.html">Account Settings</a></li>
                    <li><a href="edit-profile-password.html">Change Password</a></li>
                </ul>
            </li>
            <li className="dropdown">
                <a href="#" className="dropdown-toggle pages" data-toggle="dropdown" role="button"
                   aria-haspopup="true" aria-expanded="false">All Pages <span><img
                    src="images/down-arrow.png"
                    alt=""/></span></a>
                <ul className="dropdown-menu page-list">
                    <li><a href="index.html">Landing Page 1</a></li>
                    <li><a href="index-register.html">Landing Page 2</a></li>
                    <li><a href="newsfeed.html">Newsfeed</a></li>
                    <li><a href="newsfeed-people-nearby.html">Poeple Nearly</a></li>
                    <li><a href="newsfeed-friends.html">My friends</a></li>
                    <li><a href="newsfeed-messages.html">Chatroom</a></li>
                    <li><a href="newsfeed-images.html">Images</a></li>
                    <li><a href="newsfeed-videos.html">Videos</a></li>
                    <li><a href="timeline.html">Timeline</a></li>
                    <li><a href="timeline-about.html">Timeline About</a></li>
                    <li><a href="timeline-album.html">Timeline Album</a></li>
                    <li><a href="timeline-friends.html">Timeline Friends</a></li>
                    <li><a href="edit-profile-basic.html">Edit Profile</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </li>
            <li className="dropdown"><a href="contact.html">Contact</a></li>
        </ul>
    )
}

export default MenuHeader