const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGES='SET_CURRENT_PAGES';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING='TOOGLE_IS_FETCHING';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        default:
            return state;
    }

}

//Action creators
export const follow=(userID)=> ({ type:FOLLOW,userID } )

export const unfollow=(userID)=>({type:UNFOLLOW,userID})
export const setUsers=(users)=>({type:SET_USERS,users})
export const setCurrentPage=(currentPage)=>({type:SET_CURRENT_PAGES,currentPage})
export const setTotalUsersCount=(totalCount)=>({type:SET_TOTAL_USERS_COUNT,totalCount})
export const setToggleIsFetching=(isFetching)=>({type:TOOGLE_IS_FETCHING,isFetching})


export default usersReducer;