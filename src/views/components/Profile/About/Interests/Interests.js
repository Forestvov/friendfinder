import React from 'react'

const Interests = () => {
    return (
        <div className="about-content-block">
            <h4 className="grey"><i className="ion-ios-heart-outline icon-in-title"></i>Interests</h4>
            <ul className="interests list-inline">
                <li>
                    <span className="int-icons" title="Bycycle riding">
                        <i className="icon ion-android-bicycle"></i>
                    </span>
                </li>
                <li><span className="int-icons" title="Photography"><i
                    className="icon ion-ios-camera"></i></span></li>
                <li><span className="int-icons" title="Shopping"><i
                    className="icon ion-android-cart"></i></span></li>
                <li><span className="int-icons" title="Traveling"><i
                    className="icon ion-android-plane"></i></span></li>
                <li><span className="int-icons" title="Eating"><i
                    className="icon ion-android-restaurant"></i></span></li>
            </ul>
        </div>
    )
}

export default Interests