import styles from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  let dialogsElement = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.messages.map((message) => (
    <MessageItem message={message.message} />
  ));

  return (
    <div className={styles.messanger}>
      <div className={styles.messages}>{messagesElement}</div>
      <div className={styles.dialogs}>
        <p>Список диалогов:</p>
        {dialogsElement}
      </div>
    </div>
  );
};

export default Dialogs;
