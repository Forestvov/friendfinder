import React from 'react'

import AlbumPhoto from "./AlbumPhoto/AlbumPhoto";

const Album = () => {
    return (
        <div>
            <ul className="album-photos">
                <AlbumPhoto/>
                <AlbumPhoto/>
                <AlbumPhoto/>
                <AlbumPhoto/>
                <AlbumPhoto/>
                <AlbumPhoto/>
            </ul>
        </div>
    )
}

export default Album