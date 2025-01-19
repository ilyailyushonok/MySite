import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching
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
        isFetching: state.usersPage.isFetching
    };

}

// const mapDispatchToProps = (dispatch) => {
// return {
//     follow: (userID) => {
//   dispatch(followAC(userID));
//     },
//     unfollow: (userID) => {
//         dispatch(unfollowAC(userID));
//     },
//     setUsers:(users)=>{
//         dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//         dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//         dispatch(setTotalUsersCountAC(totalCount));
//     },
//     setToggleIsFetching: (isFetching) => {
//         dispatch(setToggleIsFetching(isFetching));
//     }
//
// }
// }

export default connect(mapStateToProps,
    {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount, setToggleIsFetching}
)(UsersContainer)
