import Users from "./UsersClassComponent";
import {connect} from "react-redux";
import {followAC, unfollowAC,setUsersAC} from "../../redux/users-reduser";


const mapStateToProps = (state) => {
    return {
users: state.usersPage.usersData
    }
}

const mapDispatchToProps = (dispatch) => {
return {
    follow: (userID) => {
  dispatch(followAC(userID));
    },
    unfollow: (userID) => {
        dispatch(unfollowAC(userID));
    },
    setUsers:(users)=>{
        dispatch(setUsersAC(users));
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Users)