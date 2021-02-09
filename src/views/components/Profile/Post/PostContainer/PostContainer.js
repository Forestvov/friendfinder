import React from 'react'

import UserAvatar from "../../../User/UserAvatar/UserAvatar";
import PostDetail from "./PostDetail/PostDetail";

const PostContainer = () => {
    return (
        <div className="post-container">
            <UserAvatar styleClass={"profile-photo-md pull-left"}/>
            <PostDetail/>
        </div>
    )
}

export default PostContainer