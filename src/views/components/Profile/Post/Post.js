import React from 'react'

import PostDate from "./PostDate/PostDate";
import PostImage from "./PostImage";
import PostContainer from "./PostContainer/PostContainer";

const Post = ({postID,postImage, postText, postLike, postDisLike,setLike, ...props}) => {
    return (
        <div className="post-content">
            <PostDate/>
            <PostImage postImage={postImage}/>
            <PostContainer
                postLike={postLike}
                postDisLike={postDisLike}
                postText={postText}
                setLike={setLike}
                postID={postID}
                liked={props.liked}
                disliked={props.disliked}
                setDislike={props.setDislike}
                postComments={props.postComments}
            />
        </div>
    )
}

export default Post