const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGES='SET_CURRENT_PAGES';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state;
    }

}
export const followAC=(userID)=> ({ type:FOLLOW,userID } )

export const unfollowAC=(userID)=>({type:UNFOLLOW,userID})
export const setUsersAC=(users)=>({type:SET_USERS,users})
export const setCurrentPageAC=(currentPage)=>({type:SET_CURRENT_PAGES,currentPage})
export const setTotalUsersCountAC=(totalCount)=>({type:SET_TOTAL_USERS_COUNT,totalCount})


export default usersReducer;