import React from 'react';

import { sendMessageActionCreator, updateNewMessageBodyCreator } from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator());
                };

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                };

                return (
                    <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        messagesPage={store.getState().messagesPage}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
