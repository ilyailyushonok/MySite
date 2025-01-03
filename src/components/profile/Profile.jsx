import React from 'react';
import s from "./Profile.module.css"
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;