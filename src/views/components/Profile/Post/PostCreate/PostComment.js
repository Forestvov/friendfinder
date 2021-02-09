import React from 'react'

import UserAvatar from "../../../User/UserAvatar/UserAvatar";

const PostComment = () => {
    return (
        <div className="post-comment">
            <UserAvatar styleClass={"profile-photo-sm"}/>
            <p>
                <a href="timeline.html" className="profile-link">Diana </a>
                <i className="em em-laughing"></i>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
        </div>
    )
}

export default PostComment