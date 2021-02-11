import React from 'react'

import PostForm from "../../common/Forms/PostForm";

const ProfileCreatePost = (props) => {
    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <PostForm onSubmit={addNewPost}/>
    )
}

export default ProfileCreatePost