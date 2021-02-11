import React from 'react'

const Appraisal = ({postID,postLike, postDisLike, setLike, liked, setDislike , disliked}) => {

    const handleClick = (postID, status,  count, callback) => {

        if(callback === setLike && disliked === true){
            alert('Delete Dislike :D')
            return
        }

        if(callback === setDislike && liked === true){
            alert('Delete Like :D')
            return
        }

        if (!status) {
            count += 1
            status = true
        } else {
            count -= 1
            status = false
        }

        callback(postID, count, status)
    }

    return (
        <div className="reaction">
            <button
                onClick={() => {handleClick(postID, liked, postLike, setLike)}}
                className="btn text-green"><i className="icon ion-thumbsup"></i> {postLike}</button>
            <button
                onClick={() => {handleClick(postID, disliked, postDisLike, setDislike)}}
                className="btn text-red"><i className="fa fa-thumbs-down"></i> {postDisLike}</button>
        </div>
    )
}

export default Appraisal