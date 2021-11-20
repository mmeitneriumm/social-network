import logo from "./img/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="profile">
        <a href="#">My profile</a>
      </div>
      <div className="messages">
        <a href="#">Messages</a>
      </div>
      <img src={logo} alt="лого" className="logo" />
      <div className="news">
        <a href="#">News</a>
      </div>
      <div className="music">
        <a href="#">Music</a>
      </div>
    </header>
  );
};

export default Header;
