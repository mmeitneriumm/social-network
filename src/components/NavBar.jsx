import "./NavBar.css";
import { FaUserAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="my-profile">
        <FaUserAlt />
        <a href="#">My profile</a>
      </div>
      <div className="my-connect">
        <FaComments />
        <a href="#">Connect</a>
      </div>
      <div className="my-world-gallery">
        <FaPhotoVideo />
        <a href="#">World gallery</a>
      </div>
      <div className="my-music">
        <FaMusic />
        <a href="#">Music (why not?)</a>
      </div>
      <div className="my-settings">
        <FaSlidersH />
        <a href="#">Settings</a>
      </div>
    </div>
  );
};

export default NavBar;
