import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost:()=>{dispatch(addPostActionCreator())},
        updateNewPostText:(text)=>{dispatch(updateNewPostTextActionCreator(text))}
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
