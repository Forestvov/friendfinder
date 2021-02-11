import {ADD_POST, SET_DISLIKE, SET_LIKE, SET_POSTS} from "../actions/posts-action";

import {updateObjectInArray} from "../../utils/object-helpers";


const initialState = {
    posts: [
        {
            postID: 1,
            postImage: 'https://images.unsplash.com/photo-1612831200091-c08595b18e6b?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            postLike: 13,
            postDisLike: 0,
            postComments: [
                {
                    postCommentID: 1,
                    postCommentAuthorId: 3,
                    postCommentText: "Lorem ipsum dolor sit amet, consecteturem ipsum dolor sit amet, consectem ipsum dolor sit amet, consect adipiscing elit"
                },
                {
                    postCommentID: 2,
                    postCommentAuthorId: 4,
                    postCommentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    postCommentID: 3,
                    postCommentAuthorId: 5,
                    postCommentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
            ]
        },
        {
            postID: 2,
            postImage: 'https://images.unsplash.com/photo-1612972412954-c7dd0e42ba4b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            postText: "culpa qui officia deserunt mollit anim id est laborum.",
            postLike: 0,
            postDisLike: 2,
            postComments: []
        }
    ]
}


const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case ADD_POST:
            const newPost = {
                postID: 3,
                postImage: 'http://placehold.it/1920x1280',
                postText: action.postText,
                postLike: 0,
                postDisLike: 0,
                postComments: []
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_LIKE:
            return {
                ...state,
                posts: updateObjectInArray(state.posts, action.postId, "postID",
                    {postLike: action.countLike, liked: action.liked})
            }
        case SET_DISLIKE:
            return {
                ...state,
                posts: updateObjectInArray(state.posts, action.postId, "postID",
                    {postDisLike: action.countDisLike, disliked: action.disliked})
            }
        default:
            return state
    }
}


export default postsReducer