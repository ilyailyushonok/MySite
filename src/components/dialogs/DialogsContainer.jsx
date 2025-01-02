import React from 'react';

import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
let state=props.state.messagesPage

    let onSendMessageClick=()=>{
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange=(body)=>{
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                    newMessageBody={state.newMessageBody} dialogsData={state.dialogsData} messagesData={state.messagesData}/>

}
export default DialogsContainer;