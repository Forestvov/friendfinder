import React from 'react'

const PostText = ({postText}) => {
    return (
        <div>
            <div className="line-divider"></div>
            <div className="post-text">
                <p>
                    {postText}
                    <i
                        className="em em-anguished"></i> <i className="em em-anguished"></i> <i
                        className="em em-anguished"></i>
                </p>
            </div>
            <div className="line-divider"></div>
        </div>
    )
}

export default PostText