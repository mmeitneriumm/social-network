import styles from "./Users.module.css";
import { FaMapMarker } from "react-icons/fa";

let Users = (props) => {
  return (
    <div className={styles.users}>
      {props.users.map((u) => (
        <div key={u.id} className={styles.usersItem}>
          <div className={styles.avaAndName}>
            <div className={styles.photo}>
              <img src={u.photoUrl} alt="ava" />
            </div>
            <div className={styles.fullName}>{u.fullName}</div>
          </div>
          <div className={styles.status}>"{u.status}"</div>
          <div className={styles.location}>
            <FaMapMarker />
            <div>{u.location.city}, </div>
            <div>{u.location.country}</div>
          </div>
          <div className={styles.buttonBlock}>
            {u.followed ? (
              <button
                className={styles.button}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={styles.button}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
