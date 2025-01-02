import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";



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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }}


export default store;