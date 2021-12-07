import React from "react";
import styles from "./Users.module.css";
import { FaMapMarker } from "react-icons/fa";
import axios from "axios";
import user from "./../img/user.jpg";

class Users extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={styles.users}>
        {this.props.users.map((u) => (
          <div key={u.id} className={styles.usersItem}>
            <div className={styles.avaAndName}>
              <div className={styles.photo}>
                <img
                  src={u.photos.small != null ? u.photos.small : user}
                  alt="ava"
                />
              </div>
              <div className={styles.fullName}>{u.name}</div>
            </div>
            <div className={styles.status}>"{u.status}"</div>
            <div className={styles.location}>
              <FaMapMarker />
              <div>{"u.location.city"}, </div>
              <div>{"u.location.country"}</div>
            </div>
            <div className={styles.buttonBlock}>
              {u.followed ? (
                <button
                  className={styles.button}
                  onClick={() => {
                    this.props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={styles.button}
                  onClick={() => {
                    this.props.follow(u.id);
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
  }
}

export default Users;
