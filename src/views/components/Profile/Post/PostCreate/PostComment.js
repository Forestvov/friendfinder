import React from 'react'

import UserAvatar from "../../../User/UserAvatar/UserAvatar";

const PostComment = ({postCommentText}) => {
    return (
        <div className="post-comment">
            <UserAvatar styleClass={"profile-photo-sm"}/>
            <p>
                <a href="timeline.html" className="profile-link">Diana </a>
                <i className="em em-laughing"></i>
                {postCommentText}
            </p>
        </div>
    )
}

export default PostComment