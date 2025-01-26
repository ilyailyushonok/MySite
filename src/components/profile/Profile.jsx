import React from 'react';
import s from "./Profile.module.css"
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Navigate} from "react-router-dom";


const Profile = (props) => {
    if(!props.isAuth){return <Navigate to={'/login'}/>}
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;