import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={styles.messanger}>
      <div className={styles.messages}>
        <div className={styles.messageItemMe}>Есть чай через руки?</div>
        <div className={styles.messageItemYou}>Пить морковь без носков?</div>
        <div className={styles.messageItemMe}>Что</div>
        <div className={styles.messageItemYou}>Что?</div>
      </div>
      <div className={styles.dialogs}>
        <p>Список диалогов:</p>
        <div className={styles.dialogsItem}>
          <NavLink exact to="dialogs/1">
            Хаски Мен
          </NavLink>
        </div>
        <div className={styles.dialogsItemActive}>
          <NavLink exact to="dialogs/2">
            Никита Кальян
          </NavLink>
        </div>
        <div className={styles.dialogsItem}>
          <NavLink exact to="dialogs/3">
            Влад Машина
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
