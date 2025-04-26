import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./dialogItem/dialogsItem";
import MessageItem from "./message/messagesItem";
import {Field, reduxForm} from "redux-form";



const Dialogs = (props) => {
    let dialogsElements=props.messagesPage.dialogsData
        .map(d=><DialogItem id={d.id} key={d.id} name={d.name}/>)

    let messagesElements= props.messagesPage.messagesData
            .map(m=> <MessageItem message={m.message} key={m.id} />)

    let addNewMessage=(values)=>{
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messagesElements}</div>
            </div>
<AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
}

const AddMessageForm=(props)=> {
    return(
    <form className={s.newMessage} onSubmit={props.handleSubmit}>
        <Field component='textarea' name='newMessageBody' placeholder='New Message' />
        <button>Send</button>
    </form>
    )
}
const AddMessageFormRedux= reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;