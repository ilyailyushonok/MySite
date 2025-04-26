import { sendMessageActionCreator } from "../../redux/messages-reducer";
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

        sendMessage:(newMessageBody)=>{
            dispatch(sendMessageActionCreator(newMessageBody));
        }
    }
}



export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
