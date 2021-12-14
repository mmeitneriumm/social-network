import logo from "../img/image.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <img src={logo} alt="лого" className={styles.logo} />
      <div className={styles.login}>
        {props.isAuth ? (
          <p>{props.login}</p>
        ) : (
          <NavLink to={"/login"}>
            <p>Login</p>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
