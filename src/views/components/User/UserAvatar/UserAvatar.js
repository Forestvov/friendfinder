import React from 'react'

const UserAvatar = ({styleClass}) => {
    return (
        <img src="http://placehold.it/300x300" alt="user"
             className={styleClass}/>
    )
}

export default UserAvatar