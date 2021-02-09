import React from 'react'

import PostDate from "./PostDate/PostDate";
import PostImage from "./PostImage";
import PostContainer from "./PostContainer/PostContainer";

const Post = () => {
    return (
        <div className="post-content">
            <PostDate/>
            <PostImage/>
            <PostContainer/>
        </div>
    )
}

export default Post