import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./dialogItem/dialogsItem";
import MessageItem from "./message/messagesItem";


const Dialogs = (props) => {


    let dialogsElements=props.dialogsData
        .map(dialog=><DialogItem id={dialog.id} name={dialog.name}/>)

    let messagesElements= props.messagesData
            .map(m=> <MessageItem message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
               </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    );
}
export default Dialogs;