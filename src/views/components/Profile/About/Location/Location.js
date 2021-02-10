import React from 'react'

const Location = () => {
    return (
        <div className="about-content-block">
            <h4 className="grey"><i className="ion-ios-location-outline icon-in-title"></i>Location</h4>
            <p>228 Park Eve, New York</p>
            <div className="google-maps">
                <div id="map" className="map"></div>
            </div>
        </div>
    )
}

export default Location