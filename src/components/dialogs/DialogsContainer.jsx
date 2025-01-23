import { sendMessageActionCreator, updateNewMessageBodyCreator } from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


let mapStateToProps = (state)=>{
return {
    messagesPage:state.messagesPage
}
}

let mapDispatchToProps=(dispatch)=>{
    return {
        updateNewMessageBody:(body)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageActionCreator());
        }
    }
}

const AuthRedirectComponent=withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
