import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };

                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        postsData={store.getState().profilePage.postsData}
                        newPostText={store.getState().profilePage.newPostText}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
