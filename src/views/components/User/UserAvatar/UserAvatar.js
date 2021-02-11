import React from 'react'

const UserAvatar = ({userAvatarUrl, styleClass}) => {
    return (
        <img src={userAvatarUrl} alt="user"
             className={styleClass}/>
    )
}

export default UserAvatar