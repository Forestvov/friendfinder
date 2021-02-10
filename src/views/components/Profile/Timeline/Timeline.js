import React from 'react'

import ProfileCreatePost from "../ProfileCreatePost/ProfileCreatePost";
import Post from "../Post/Post";

const Timeline = () => {
    return (
        <div className="timeline">
            <div>
                <ProfileCreatePost/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default Timeline