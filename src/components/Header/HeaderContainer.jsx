import React from "react";
import { connect } from "react-redux";
import { getAuthThunk } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthThunk()
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

console.log(mapStateToProps);

export default connect(mapStateToProps, { getAuthThunk })(HeaderContainer);
