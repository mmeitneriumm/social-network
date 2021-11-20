import logo from "./img/image.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="лого" className="logo" />
    </header>
  );
};

export default Header;
