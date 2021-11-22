import styles from "./MyPicture.module.css";
import Picture from "./Picture/Picture";

const MyPicture = () => {
  return (
    <div className={styles.myPicture}>
      <h2>My Picture</h2>
      <div>New picture</div>
      <textarea cols="30" rows="2"></textarea>
      <button>Add picture</button>
      <Picture message="Дратути, теперь и у меня своя соцсеть" />
      <Picture message="Здравствуйте, я адыхаю" />
    </div>
  );
};

export default MyPicture;
