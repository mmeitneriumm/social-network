import styles from "./NavBar.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.item}>
        <FaUserAlt />
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          My profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <FaUserAlt />
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          My users :3
        </NavLink>
      </div>
      <div className={styles.item}>
        <FaComments />
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          My dialogs
        </NavLink>
      </div>
      <div className={styles.item}>
        <FaPhotoVideo />
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          My news
        </NavLink>
      </div>
      <div className={styles.item}>
        <FaMusic />
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          My music
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
