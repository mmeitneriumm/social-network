import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.dispatch(updateNewMessageActionCreator(text));
  };

  return (
    <Dialogs
      dialogs={props.dialogs}
      messages={props.messages}
      dispatch={props.dispatch}
      newMessageText={props.newMessageText}
      addMessage={addMessage}
      updateNewMessageText={onMessageChange}
    />
  );
};

export default DialogsContainer;
