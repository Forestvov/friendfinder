import React from 'react'

const PostImage = ({postImage}) => {
    return (
        <img src={postImage} alt="post-image"
             className="img-responsive post-image"/>
    )
}

export default PostImage