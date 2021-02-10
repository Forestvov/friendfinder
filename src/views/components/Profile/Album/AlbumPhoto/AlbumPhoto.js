import React from 'react'

const AlbumPhoto = () => {
    return (
        <li>
            <div className="img-wrapper" data-toggle="modal" data-target=".photo-1">
                <img src="http://placehold.it/1000x1000" alt="photo"/>
            </div>
            <div className="modal fade photo-1" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <img src="http://placehold.it/1000x1000" alt="photo"/>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default AlbumPhoto