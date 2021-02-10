import React from 'react'

import Friend from "./Friend/Friend";

const Friends = () => {
    return (
        <div>
            <div className="friend-list">
                <div className="row">
                    <Friend/>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                </div>
            </div>
        </div>
    )
}

export default Friends