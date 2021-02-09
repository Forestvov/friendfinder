import React from 'react'
import {NavLink} from "react-router-dom";
import cn from 'classnames'


const ProfileMenu = ({styleClass}) => {
    return (
        <ul className={cn('list-inline', styleClass)}>
            <li><NavLink to={"/timeline"} activeClassName={"active"}>Timeline</NavLink></li>
            <li><NavLink to={"/about"} activeClassName={"active"}>About</NavLink></li>
            <li><NavLink to={"/album"} activeClassName={"active"}>Album</NavLink></li>
            <li><NavLink to={"/friends"} activeClassName={"active"}>Friends</NavLink></li>
        </ul>
    )
}

export default ProfileMenu