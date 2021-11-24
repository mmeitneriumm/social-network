import styles from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Хаски Мен" },
    { id: 2, name: "Никита Кальян" },
    { id: 3, name: "Влад Машина" },
  ];

  let messageData = [
    { id: 1, message: "Есть чай через руки?" },
    { id: 2, message: "Пить морковь без носков?" },
    { id: 3, message: "Что" },
    { id: 4, message: "Что?" },
  ];

  let dialogsElement = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = messageData.map((message) => (
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
