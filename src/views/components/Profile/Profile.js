import React from 'react'
import {Route} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";

import ProfileNavBar from "./ProfileNavBar/ProfileNavBar";
import ProfileNavBarMobile from "./ProfileNavBarMobile/ProfileNavBarMobile";
import Timeline from "./Timeline/Timeline";
import About from "./About/About";
import Album from "./Album/Album";
import Friends from "./Friends/Friends";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar";
import {getUsersSelectors} from "../../../redux/selectors/user-selector";
import {getPosts} from "../../../redux/selectors/posts-selector";
import {addPost, setDislike, setLike} from "../../../redux/actions/posts-action";

const Profile = ({users, posts, setLike, setDislike, addPost}) => {
    return (
        <div>
            <div className="timeline-cover">
                <ProfileNavBar/>
                <ProfileNavBarMobile/>
            </div>
            <div id="page-contents">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-7">
                        <Route path={'/timeline'} render={() => <Timeline posts={posts} setLike={setLike} addPost={addPost} setDislike={setDislike}/>}/>
                        <Route path={'/about'} render={() => <About/>}/>
                        <Route path={'/album'} render={() => <Album/>}/>
                        <Route path={'/friends'} render={() => <Friends users={users} />}/>
                    </div>
                    <ProfileSideBar/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: getUsersSelectors(state),
        posts: getPosts(state),
    }
}

export default compose(
    connect(mapStateToProps, {setLike, setDislike, addPost})
)(Profile)