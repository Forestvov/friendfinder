import React from 'react'

const SearchFormHeader = () => {
    return (
        <form className="navbar-form navbar-right hidden-sm">
            <div className="form-group">
                <i className="icon ion-android-search"></i>
                <input type="text" className="form-control"
                       placeholder="Search friends, photos, videos" />
            </div>
        </form>
    )
}

export default SearchFormHeader