import logo from "../img/image.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="лого" className={styles.logo} />
    </header>
  );
};

export default Header;
