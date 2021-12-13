import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.contacts}>
        <p>facebook: {props.profile.contacts.facebook}</p>
        <p>website: {props.profile.contacts.website}</p>
        <p>vk: {props.profile.contacts.vk}</p>
        <p>twitter: {props.profile.contacts.twitter}</p>
        <p>instagram: {props.profile.contacts.instagram}</p>
        <p>youtube: {props.profile.contacts.youtube}</p>
        <p>github: {props.profile.contacts.github}</p>
        <p>mainLink: {props.profile.contacts.mainLink}</p>
      </div>
      <div className={styles.profileInfo_description}>
        <img src={props.profile.photos.large} alt="" />
        <p className={styles.name}>{props.profile.fullName}</p>
        <p className={styles.skill}>{props.profile.aboutMe}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
