import styles from "./Users.module.css";
import { FaMapMarker } from "react-icons/fa";
import user from "./../img/user.jpg";
import { NavLink } from "react-router-dom";
import { deleteUnfollow, postFollow } from "../../api/api";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  if (pagesCount > 10) {
    if (props.currentPage > 5) {
      for (let i = props.currentPage - 4; i <= props.currentPage + 5; i++) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }

  return (
    <div className={styles.users}>
      <div className={styles.pagination}>
        {pages.map((p) => {
          return (
            <button className={styles.button}>
              <span
                className={props.currentPage === p && styles.selectPage}
                onClick={(e) => {
                  props.onPageChanged(p);
                }}
              >
                {p}
              </span>
            </button>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={styles.usersItem}>
          <div className={styles.avaAndName}>
            <div className={styles.photo}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : user}
                  alt="ava"
                />
              </NavLink>
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
                  deleteUnfollow(u.id).then((response) => {
                    if (response.data.resultCode === 0) {
                      props.unFollow(u.id);
                    }
                  });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={styles.button}
                onClick={() => {
                  postFollow(u.id).then((response) => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id);
                    }
                  });
                }}
              >
                {" "}
                Follow{" "}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
