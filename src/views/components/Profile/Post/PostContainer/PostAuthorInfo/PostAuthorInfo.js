import React from 'react'

import ProfileLink from "../../../ProfileLink/ProfileLink";



const PostAuthorInfo = () => {
    return (
        <div className="user-info">
            <h5>
                <ProfileLink/>
                <span className="following">following</span>
            </h5>
            <p className="text-muted">Published a photo about 15 mins ago</p>
        </div>
    )
}

export default PostAuthorInfo