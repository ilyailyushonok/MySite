const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody : action.body
            };


        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                messagesData : [...state.messagesData,{id: 6, message: body}],
                newMessageBody :''
            };


        default:
            return state;
    }

};

export const  sendMessageActionCreator=()=>({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});



 export default messagesReducer;