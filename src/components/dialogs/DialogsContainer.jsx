import { sendMessageActionCreator, updateNewMessageBodyCreator } from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


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

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
