import styles from "./NavBar.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={`${styles.item} ${styles.active}`}>
        <FaUserAlt />
        <a href="/profile">My profile</a>
      </div>
      <div className={styles.item}>
        <FaComments />
        <a href="/dialogs">My dialogs</a>
      </div>
      <div className={styles.item}>
        <FaPhotoVideo />
        <a href="/news">My news</a>
      </div>
      <div className={styles.item}>
        <FaMusic />
        <a href="/music">My music</a>
      </div>
      <div className={styles.item}>
        <FaSlidersH />
        <a href="#">Settings</a>
      </div>
    </div>
  );
};

export default NavBar;
