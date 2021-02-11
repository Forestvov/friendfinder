import React from 'react'
import UserAvatar from "../../User/UserAvatar/UserAvatar";
import {Field, reduxForm} from "redux-form";

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="create-post">
                <div className="row">
                    <div className="col-md-7 col-sm-7">
                        <div className="form-group">
                            <UserAvatar styleClass={"profile-photo-md"}/>
                            <Field className={"form-control"} component="textarea" name="newPostText" placeholder="Write what you wish"/>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-5">
                        <div className="tools">
                            <ul className="publishing-tools list-inline">
                                <li><a href="#"><i className="ion-compose"></i></a></li>
                                <li><a href="#"><i className="ion-images"></i></a></li>
                                <li><a href="#"><i className="ion-ios-videocam"></i></a></li>
                                <li><a href="#"><i className="ion-map"></i></a></li>
                            </ul>
                            <button className="btn btn-primary pull-right">Publish</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({form: 'addNewPost'})(PostForm)