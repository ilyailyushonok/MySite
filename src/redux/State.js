const ADD_POST='ADD-POST'
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE='SEND-MESSAGE'

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, post: 'Hi,how are you', likes: 43},
                {id: 2, post: 'It\'s my first post', likes: 423},
                {id: 3, post: 'Kamsutra like', likes: 123345456}
            ],
            newPostText: 'Hello!'
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Victor'},
                {id: 5, name: 'Valera'}
            ],
            messagesData: [
                {id: 1, message: 'Hay'},
                {id: 2, message: 'how are you?'},
                {id: 3, message: 'YO'},
                {id: 4, message: 'YOHOHO'},
                {id: 5, message: 'YOHOHO'},
                {id: 6, message: 'YOPO'}
            ],
            newMessageBody:''
        },
        sidebar:{}

    },
    _callSubscriber() {
        console.log('state changed')
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_POST_TEXT){
    this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state)
}
        else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.messagesPage.newMessageBody = action.body;
        }
        else if(action.type === SEND_MESSAGE){
         let body=this._state.messagesPage.newMessageBody  ;
            this._state.messagesPage.newMessageBody='';
            this._state.messagesPage.messagesData.push( {id: 6, message: body});
            this._callSubscriber(this._state);
        }

}}

export const addPostActionCreator=()=>({type:ADD_POST})
export const updateNewPostTextActionCreator=(text)=>({
    type:UPDATE_NEW_POST_TEXT,
    newText:text
})
export const  sendMessageActionCreator=()=>({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});


export default store;