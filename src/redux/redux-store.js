import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import {thunk} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let reducers=combineReducers({
    profilePage:profileReducer,
    messagesPage:messagesReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer
})


let store=createStore(reducers,applyMiddleware(thunk));

window.store=store;

export default store;