import React from 'react'
import cn from 'classnames'

const SocialLinks = () => {
    return (
        <ul className="list-inline social-icons">
            <li><a href="#"><i className={cn('icon', 'ion-social-facebook')}/></a></li>
            <li><a href="#"><i className={cn('icon', 'ion-social-twitter')}/></a></li>
            <li><a href="#"><i className={cn('icon', 'ion-social-googleplus')}/></a></li>
            <li><a href="#"><i className={cn('icon', 'ion-social-pinterest')}/></a></li>
            <li><a href="#"><i className={cn('icon', 'ion-social-linkedin')}/></a></li>
        </ul>
    )
}

export default SocialLinks