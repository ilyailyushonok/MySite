import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
} from "../../redux/users-reduser";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";




class UsersContainer extends React.Component {


    componentDidMount() {
this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged=(pageNumber)=>{
        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching?<Preloader/>:null}
            <Users onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>;
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };

}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
    {
        follow,unfollow,
        setCurrentPage,
        getUsers
    })
    )(UsersContainer)