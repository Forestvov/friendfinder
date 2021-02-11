import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'

import usersReducer from "./reducers/users-reducer";
import postsReducer from "./reducers/posts-reducer";

const reducers = combineReducers({
    usersReducer: usersReducer,
    postsReducer: postsReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store