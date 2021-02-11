import React from 'react'

import PostAuthorInfo from "../PostAuthorInfo/PostAuthorInfo";
import Appraisal from "../../../../common/Appraisal/Appraisal";
import PostText from "../PostText/PostText";
import PostComment from "../../PostCreate/PostComment";
import PostCreateComment from "../PostCreateComment/PostCreateComment";

const PostDetail = ({postID,postText, postLike, postDisLike,setLike, postComments, ...props}) => {
    return (
        <div className="post-detail">

            <PostAuthorInfo/>

            <Appraisal liked={props.liked} postID={postID} setLike={setLike} postLike={postLike}
                       setDislike={props.setDislike} postDisLike={postDisLike} disliked={props.disliked}/>

            <PostText postText={postText}/>

            {postComments.map((p) =>
                <PostComment
                    key={p.postCommentID}
                    postCommentText={p.postCommentText}
                />)}

            <PostCreateComment/>

        </div>
    )
}

export default PostDetail