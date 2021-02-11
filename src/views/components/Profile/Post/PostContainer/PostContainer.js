import React from 'react'

import UserAvatar from "../../../User/UserAvatar/UserAvatar";
import PostDetail from "./PostDetail/PostDetail";

const PostContainer = ({postID,postText, postLike, postDisLike, setLike, ...props}) => {
    return (
        <div className="post-container">
            <UserAvatar styleClass={"profile-photo-md pull-left"}/>
            <PostDetail liked={props.liked} postID={postID} setDislike={props.setDislike} disliked={props.disliked}
                        setLike={setLike} postLike={postLike} postDisLike={postDisLike} postText={postText}
                        postComments={props.postComments}
            />
        </div>
    )
}

export default PostContainer