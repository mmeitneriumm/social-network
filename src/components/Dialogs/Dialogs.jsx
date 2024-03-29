import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  console.log(props.dialogs);
  let dialogsElement = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.messages.map((message) => (
    <MessageItem message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={styles.messanger}>
      <div className={styles.messages}>
        {messagesElement}
        <div className={styles.addPost}>
          <textarea
            ref={newMessageElement}
            cols="30"
            rows="2"
            placeholder="Your message..."
            value={props.newMessageText}
            onChange={onMessageChange}
          ></textarea>
          <button onClick={addMessage} className={styles.button}>
            Send message
          </button>
        </div>
      </div>

      <div className={styles.dialogs}>
        <p>Dialogs list:</p>
        {dialogsElement}
      </div>
    </div>
  );
};

export default Dialogs;
