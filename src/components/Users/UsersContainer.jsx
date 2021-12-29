import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsersThunkCreator,
  unfollowThunk,
  followThunk
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import loading from "./../img/loading.svg";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
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
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsersThunkCreator,
  followThunk,
  unfollowThunk
})(UsersContainer);
