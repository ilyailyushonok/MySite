
import React, { useEffect } from 'react';
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { setUserProfile } from "../../redux/profile-reducer";

const ProfileContainer = (props) => {
    let { userId } = useParams()

    useEffect(() => {

        let id = userId || 32065;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then((response) => {
                props.setUserProfile(response.data);
            });
    }, [userId]); // Перезапуск, если userId изменится

    return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

// Экспортируем компонент, подключая Redux
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
