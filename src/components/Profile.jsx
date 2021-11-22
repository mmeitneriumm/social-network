import styles from "./Profile.module.css";
import background from "../img/bg.jpg";

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src={background} alt="background" />
      </div>
      <div>ava + description</div>
      <div>
        MyPicture
        <div>New picture</div>
        <div className={styles.pics}>
          <div className={styles.item}>pic 1</div>
          <div className={styles.item}>pic 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
