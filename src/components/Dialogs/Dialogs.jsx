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
        <div className={styles.dialogsItem}>Хаски Мен</div>
        <div className={styles.dialogsItemActive}>Никита Кальян</div>
        <div className={styles.dialogsItem}>Влад Машина</div>
      </div>
    </div>
  );
};

export default Dialogs;
