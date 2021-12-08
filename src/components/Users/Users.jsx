import React from "react";
import styles from "./Users.module.css";
import { FaMapMarker } from "react-icons/fa";
import axios from "axios";
import user from "./../img/user.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    if (pagesCount > 10) {
      if (this.props.currentPage > 5) {
        for (
          let i = this.props.currentPage - 4;
          i <= this.props.currentPage + 5;
          i++
        ) {
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
                  className={this.props.currentPage === p && styles.selectPage}
                  onClick={(e) => {
                    this.onPageChanged(p);
                  }}
                >
                  {p}
                </span>
              </button>
            );
          })}
        </div>
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
