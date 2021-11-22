import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import background from "../img/bg.jpg";

const Profile = () => {
  return (
    <div>
      <div>
        <img src={background} alt="background" />
      </div>
      <div className={styles.profileInfo}>
        <img
          src="https://sun9-10.userapi.com/impg/Y98ahL09qw8fvGaCUPCJ1taIkWcaGWewN7jIgw/Tsso-6hRbXs.jpg?size=564x564&quality=96&sign=16ae910f5e035029be70272137a4c5d6&type=album"
          alt=""
        />

        <div className={styles.description}>
          <h4>Maria Merkushova</h4>
          <h4>21 y.o</h4>
          <h4>Frontend-developer</h4>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
