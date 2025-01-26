import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState = {
    postsData: [
        {id: 1, post: 'Hi,how are you', likes: 43},
        {id: 2, post: 'It\'s my first post', likes: 423},
        {id: 3, post: 'Kamsutra like', likes: 123345456}
    ],
    newPostText: 'Hello!',
    profile: null,
    status:'status:---'
}

 const profileReducer = (state=initialState , action) => {
     switch (action.type) {
 case
     ADD_POST: {
     return  {
         ...state,
         postsData : [...state.postsData,{
             id: 5,
             post: state.newPostText,
             likes: 0
         }],
         newPostText : ''};

 }
 case
   UPDATE_NEW_POST_TEXT: {
    return {
         ...state,
         newPostText : action.newText};
     }
case
SET_USER_PROFILE: {
    return {
         ...state,
        profile : action.profile};
     }
case
SET_STATUS: {
    return {
         ...state,
        status : action.status};
     }
default:
    return state;
 }

}
//Action creator
 export const addPostActionCreator=()=>({type:ADD_POST})
 export const updateNewPostTextActionCreator=(text)=>({
     type:UPDATE_NEW_POST_TEXT,
     newText:text
 })
export const setUserProfile=(profile)=>({type:SET_USER_PROFILE,profile})
export const setStatus=(status)=>({type:SET_STATUS,status})
//Thunk creator
export const getUserProfile=(userId)=>(dispatch)=>{
    profileAPI.getProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response.data))
        });

}
export const getStatus=(userId)=>(dispatch)=>{
    profileAPI.getStatus(userId)
        .then((response) => {
            dispatch(setStatus(response.data))
        });

}
export const updateStatus=(status)=>(dispatch)=>{
    profileAPI.updateStatus(status)
        .then((response) => {
            if(response.data.resultCode === 0) {
            dispatch(setStatus(response.data.messages))}
        });

}

 export default profileReducer;