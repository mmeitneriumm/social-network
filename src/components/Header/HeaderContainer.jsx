import React from "react";
import { connect } from "react-redux";
import { getAuth } from "../../api/api";
import { setUsersData } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    getAuth().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setUsersData(id, email, login);
      }
    });
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

export default connect(mapStateToProps, { setUsersData })(HeaderContainer);
