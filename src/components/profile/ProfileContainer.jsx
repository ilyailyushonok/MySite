
import React, { useEffect } from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import {useParams} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


const ProfileContainer = (props) => {
    let { userId } = useParams()

    useEffect(() => {

        let id = userId || 32065;
         props.getUserProfile(id)
    },[userId,props.getUserProfile])
    return <Profile {...props} profile={props.profile} />;
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

// Экспортируем компонент, подключая Redux

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withAuthRedirect
)(ProfileContainer)