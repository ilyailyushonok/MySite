import {usersAPI} from "../api/api";

const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGES='SET_CURRENT_PAGES';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING='TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS='TOOGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state=initialState , action) => {
    switch (action.type) {
        case FOLLOW: {
           return  {...state,usersData : state.usersData.map(u=> {
                if(u.id===action.userID){
                    return {...u,followed:true}
                }
                return u
                })}
        }
        case UNFOLLOW: {
            return  {...state,usersData : state.usersData.map(u=> {
                    if(u.id===action.userID){
                        return {...u,followed:false}
                    }
                    return u
                })}
        }
        case SET_CURRENT_PAGES:
            return {
                ...state,currentPage : action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            };
        case SET_USERS:
            return {...state,usersData:[...action.users]};
            case TOOGLE_IS_FETCHING:
            return {...state,isFetching:action.isFetching};
            case TOOGLE_IS_FOLLOWING_PROGRESS:
            return {...state,followingInProgress:action.isFetching?[...state.followingInProgress,action.userID] :[state.followingInProgress.filter(id=>id!=action.userID)]};
        default:
            return state;
    }

}

//Action creators
export const acceptFollow=(userID)=> ({ type:FOLLOW,userID } )
export const acceptUnfollow=(userID)=>({type:UNFOLLOW,userID})
export const setUsers=(users)=>({type:SET_USERS,users})
export const setCurrentPage=(currentPage)=>({type:SET_CURRENT_PAGES,currentPage})
export const setTotalUsersCount=(totalCount)=>({type:SET_TOTAL_USERS_COUNT,totalCount})
export const setToggleIsFetching=(isFetching)=>({type:TOOGLE_IS_FETCHING,isFetching})
export const toggleFollowingProgress=(isFetching,userId)=>({type:TOOGLE_IS_FOLLOWING_PROGRESS,isFetching,userId})


//Thunks creator
export const getUsers=(currentPage,pageSize)=> {
    return (dispatch) => {
        dispatch(setToggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setCurrentPage(currentPage)); // currentPage=pageNumber
            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }}

export const follow=(userId)=> {
    return (dispatch) => {
       dispatch(toggleFollowingProgress(true, userId))
        usersAPI.postUser(userId).then((data) => {
            if (data.resultCode == 0) {
                dispatch(acceptFollow(userId))
            }
           dispatch(toggleFollowingProgress(false, userId))
        });
    }}

export const unfollow=(userId)=> {
    return (dispatch) => {
       dispatch(toggleFollowingProgress(true, userId))
        usersAPI.deleteUser(userId).then((data) => {
            if (data.resultCode == 0) {
                dispatch(acceptUnfollow(userId))
            }
           dispatch(toggleFollowingProgress(false, userId))
        });
    }}

export default usersReducer;