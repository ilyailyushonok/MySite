import { sendMessageActionCreator, updateNewMessageBodyCreator } from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


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



export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
