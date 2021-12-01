import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageActionCreator(text));
        };

        return (
          <Dialogs
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}
            addMessage={addMessage}
            updateNewMessageText={onMessageChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
