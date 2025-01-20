import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching, toggleFollowingProgress
} from "../../redux/users-reduser";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api";




class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then((data) => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }
    onPageChanged=(pageNumber)=>{
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber,this.props.pageSize).then((data) => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
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
        followingInProgress: state.usersPage.followingInProgress
    };

}


export default connect(mapStateToProps,
    {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount, setToggleIsFetching,toggleFollowingProgress}
)(UsersContainer)
