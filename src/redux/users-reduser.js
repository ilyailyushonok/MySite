const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET-USERS';

let initialState = {usersData: []};

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
        case SET_USERS:
            return {...state,usersData:[...action.users]};
        default:
            return state;
    }

}
export const followAC=(userID)=> ({ type:FOLLOW,userID } )

export const unfollowAC=(userID)=>({type:UNFOLLOW,userID})
export const setUsersAC=(users)=>({type:SET_USERS,users})


export default usersReducer;