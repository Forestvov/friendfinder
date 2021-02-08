import React from 'react'

import cn from 'classnames'

const FooterContacts = () => {
    return (
        <div className="col-md-3 col-sm-3">
            <h5>Contact Us</h5>
            <ul className="contact">
                <li><i className={cn('icon','ion-ios-telephone-outline')}/>+1 (234) 222 0754</li>
                <li><i className={cn('icon','ion-ios-email-outline')}/>info@thunder-team.com</li>
                <li><i className={cn('icon','ion-ios-location-outline')}/>228 Park Ave S NY, USA</li>
            </ul>
        </div>
    )
}

export default FooterContacts