import React from 'react'
import FeedItem from "./FeedItem/FeedItem";

const ProfileSideBar = () => {
    return (
        <div className="col-md-2 static">
            <div id="sticky-sidebar">
                <h4 className="grey">Sarah's activity</h4>
                <FeedItem/>
                <FeedItem/>
                <FeedItem/>
                <FeedItem/>
            </div>
        </div>
    )
}

export default ProfileSideBar