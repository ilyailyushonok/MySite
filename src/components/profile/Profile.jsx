import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} postsData={props.profilePage.postsData}/>
        </div>
    )
};

export default Profile;