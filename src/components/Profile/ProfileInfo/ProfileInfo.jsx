import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileInfo_description}>
        <img src={props.profile.photos.large} alt="" />
        <p className={styles.name}>{props.profile.fullName}</p>
        <p className={styles.skill}>{props.profile.aboutMe}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
