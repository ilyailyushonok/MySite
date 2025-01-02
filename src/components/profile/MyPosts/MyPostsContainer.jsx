import React from 'react';
import {updateNewPostTextActionCreator,addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state=props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        /*action*/
        props.store.dispatch(updateNewPostTextActionCreator(text));

    }
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>)
};

export default MyPostsContainer;