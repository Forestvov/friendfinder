import React from 'react'

import UserAvatar from "../../../../User/UserAvatar/UserAvatar";

const PostCreateComment = () => {
    return (
        <div className="post-comment">
            <UserAvatar styleClass={"profile-photo-sm"}/>
            <input type="text" className="form-control" placeholder="Post a comment"/>
        </div>
    )
}

export default PostCreateComment