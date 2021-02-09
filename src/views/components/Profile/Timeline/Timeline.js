import React from 'react'
import ProfileCreatePost from "../ProfileCreatePost/ProfileCreatePost";
import Post from "../Post/Post";
import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";

const Timeline = () => {
    return (
        <div className="timeline">
            <div id="page-contents">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-7">
                        <ProfileCreatePost/>
                        <Post/>
                        <Post/>
                        <Post/>
                    </div>
                    <ProfileSideBar/>
                </div>
            </div>
        </div>
    )
}

export default Timeline