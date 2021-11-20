import "./MainContent.css";
import background from "./img/bg.jpg";

const MainContent = () => {
  return (
    <div className="content">
      <div>
        <img src={background} alt="background" />
      </div>
      <div>ava + description</div>
      <div>
        MyPicture<div>New picture</div>
      </div>
      <div>pic 1</div>
      <div>pic 2</div>
    </div>
  );
};

export default MainContent;
