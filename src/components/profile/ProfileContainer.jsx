
import React, { useEffect } from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import {useParams} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


const ProfileContainer = (props) => {
    let { userId } = useParams()

    useEffect(() => {

        let id = userId || 32065;
         props.getUserProfile(id)

            props.getStatus(id)

    },[userId,props.getUserProfile])
    return <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>;
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

// Экспортируем компонент, подключая Redux

export default compose(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus}),
    withAuthRedirect
)(ProfileContainer)