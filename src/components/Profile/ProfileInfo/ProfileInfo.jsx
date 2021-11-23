import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileInfo_description}>
        <img
          src="https://sun9-10.userapi.com/impg/Y98ahL09qw8fvGaCUPCJ1taIkWcaGWewN7jIgw/Tsso-6hRbXs.jpg?size=564x564&quality=96&sign=16ae910f5e035029be70272137a4c5d6&type=album"
          alt=""
        />
        <p className={styles.name}>Mary Storm</p>
        <p className={styles.skill}>Frontend-developer</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
