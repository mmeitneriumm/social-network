import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUsersProfile, getProfileThunk } from "../../redux/profileReducer";
import { useMatch } from "react-router-dom";
import { getProfile } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : "20875";
    this.props.getProfileThunk(userId)
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const ProfileMatch = (props) => {
  let match = useMatch("/profile/:userId/");
  return <ProfileContainer {...props} match={match} />;
};

export default connect(mapStateToProps, { setUsersProfile, getProfileThunk })(ProfileMatch);
