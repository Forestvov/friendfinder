import React from 'react'

import PostAuthorInfo from "../PostAuthorInfo/PostAuthorInfo";
import Appraisal from "../../../../common/Appraisal/Appraisal";
import PostText from "../PostText/PostText";
import PostComment from "../../PostCreate/PostComment";
import PostCreateComment from "../PostCreateComment/PostCreateComment";

const PostDetail = () => {
    return (
        <div className="post-detail">

            <PostAuthorInfo/>

            <Appraisal/>

            <PostText/>

            <PostComment/>
            <PostComment/>
            <PostComment/>

            <PostCreateComment/>

        </div>
    )
}

export default PostDetail