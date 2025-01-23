import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./dialogItem/dialogsItem";
import MessageItem from "./message/messagesItem";



const Dialogs = (props) => {
    let dialogsElements=props.messagesPage.dialogsData
        .map(d=><DialogItem id={d.id} key={d.id} name={d.name}/>)

    let messagesElements= props.messagesPage.messagesData
            .map(m=> <MessageItem message={m.message} key={m.id} />)

    let onSendMessageClick=()=>{
        props.sendMessage()
    }
    let onNewMessageChange=(e)=>{
    let body=e.target.value
        props.updateNewMessageBody(body)

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messagesElements}</div>
            </div>
            <div className={s.newMessage}>
                <textarea value={props.messagesPage.newMessageBody}
                    onChange={onNewMessageChange}
                          placeholder={'New Message'}></textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    );
}
export default Dialogs;