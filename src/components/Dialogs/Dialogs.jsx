import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={styles.dialogsItem}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = (props) => {
  return <div className={styles.messageItem}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={styles.messanger}>
      <div className={styles.messages}>
        <MessageItem message="Есть чай через руки?" />
        <MessageItem message="Пить морковь без носков?" />
        <MessageItem message="Что" />
        <MessageItem message="Что?" />
      </div>
      <div className={styles.dialogs}>
        <p>Список диалогов:</p>
        <DialogItem name="Хаски Мен" id="1" />
        <DialogItem name="Никита Кальян" id="2" />
        <DialogItem name="Влад Машина" id="3" />
      </div>
    </div>
  );
};

export default Dialogs;
