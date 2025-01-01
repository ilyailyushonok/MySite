import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import ProfileInfo from "./profileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     addPostActionCreator={props.addPostActionCreator}
                     updateNewPostTextActionCreator={props.updateNewPostTextActionCreator}/>
        </div>
    )
};

export default Profile;