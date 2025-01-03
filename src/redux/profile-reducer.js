const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
    postsData: [
        {id: 1, post: 'Hi,how are you', likes: 43},
        {id: 2, post: 'It\'s my first post', likes: 423},
        {id: 3, post: 'Kamsutra like', likes: 123345456}
    ],
    newPostText: 'Hello!'
}

 const profileReducer = (state=initialState , action) => {
     switch (action.type) {
 case
     ADD_POST:
         let newPost = {
             id: 5,
             post: state.newPostText,
             likes: 0
         };
     state.postsData.push(newPost);
     state.newPostText = ''
     return state
 case
     UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
     return state
default:
    return state;
 }

}

 export const addPostActionCreator=()=>({type:ADD_POST})
 export const updateNewPostTextActionCreator=(text)=>({
     type:UPDATE_NEW_POST_TEXT,
     newText:text
 })

 export default profileReducer;