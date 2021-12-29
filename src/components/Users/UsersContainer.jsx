import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
  toggleIsFollowingProgress,
  getUsersThunkCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import loading from "./../img/loading.svg";
import { getUsers } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator()
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <img src={loading} /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
          followingIsProgress={this.props.followingIsProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingIsProgress: state.usersPage.followingIsProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
  toggleIsFollowingProgress,
  getUsersThunkCreator
})(UsersContainer);
