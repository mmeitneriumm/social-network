import styles from "./NavBar.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.item}>
        <FaUserAlt />
        <a href="#">My profile</a>
      </div>
      <div className={styles.item}>
        <FaComments />
        <a href="#">Connect</a>
      </div>
      <div className={styles.item}>
        <FaPhotoVideo />
        <a href="#">World gallery</a>
      </div>
      <div className={styles.item}>
        <FaMusic />
        <a href="#">Music (why not?)</a>
      </div>
      <div className={styles.item}>
        <FaSlidersH />
        <a href="#">Settings</a>
      </div>
    </div>
  );
};

export default NavBar;
