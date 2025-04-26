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
    ]
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
            case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                messagesData : [...state.messagesData,{id: 6, message: body}]
            };


        default:
            return state;
    }

};

export const  sendMessageActionCreator=(newMessageBody)=>({type:SEND_MESSAGE,newMessageBody})

 export default messagesReducer;