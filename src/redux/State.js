import {rerender} from "../rerender";


let state =
    {
        profilePage:{
     postsData : [
        {id: 1, post: 'Hi,how are you',likes:43},
        {id: 2, post: 'It\'s my first post',likes:423},
        {id: 3, post: 'Kamsutra like',likes:123345456}
    ]},

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
                {id: 5, message: 'YOPO'}
            ]
        }

}

export  let addPost=(postMessage)=>{
    debugger
    let newPost = {id:5,post:postMessage,likes:0};
    state.profilePage.postsData.push(newPost);
    rerender(state);
}


export default state;