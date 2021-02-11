

export const SET_POSTS = 'friendfinder/posts/SET_POSTS'
export const SET_LIKE = 'friendfinder/posts/SET_LIKE'
export const SET_DISLIKE = 'friendfinder/posts/SET_DISLIKE'
export const ADD_POST = 'friendfinder/posts/ADD_POST'


export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const addPost = (postText) => ({type: ADD_POST, postText})
export const setLike = (postId, countLike, liked) => ({type: SET_LIKE, postId, countLike, liked})
export const setDislike = (postId, countDisLike, disliked) => ({type: SET_DISLIKE, postId, countDisLike, disliked})