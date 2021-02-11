import React from 'react'

import ProfileCreatePost from "../ProfileCreatePost/ProfileCreatePost";
import Post from "../Post/Post";


const Timeline = ({posts,setLike, setDislike, addPost}) => {
    return (
        <div className="timeline">
            <div>
                <ProfileCreatePost addPost={addPost}/>
                {[...posts]
                    .reverse()
                    .map((p) => <Post
                    postImage={p.postImage}
                    postText={p.postText}
                    postLike={p.postLike}
                    setLike={setLike}
                    postDisLike={p.postDisLike}
                    key={p.postID}
                    postID={p.postID}
                    liked={p.liked}
                    disliked={p.disliked}
                    setDislike={setDislike}
                    postComments={p.postComments}
                />)}
            </div>
        </div>
    )
}

export default Timeline