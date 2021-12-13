import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Profile from "./Profile";
import { setUsersProfile } from "../../redux/profileReducer";
import { useMatch } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : "20875";
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUsersProfile(response.data);
      });
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

export default connect(mapStateToProps, { setUsersProfile })(ProfileMatch);
