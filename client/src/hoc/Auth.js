import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';
import { getProfile } from '../actions/userActions';
const Auth = (WrappedComponent, reload, adminRoute = null) => {
  class Auth extends React.Component {
    state = {
      isLoggedIn: false,
      isAdmin: false,
      user: {},
    };

    static getDerivedStateFromProps(props, state) {
      console.log({ props, state });
      const data = JSON.parse(localStorage.getItem('user'));
      if (data !== null) {
        state.user = data.user;
        state.isLoggedIn = true;
        return null;
      }

      return null;
    }

    logout = () => {
      localStorage.removeItem('user');
      this.setState({
        isLoggedIn: false,
        isAdmin: false,
        user: {},
      });
      this.props.history.push('/login');
      return;
    };

    componentDidMount() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user === null) {
        this.props.history.push('/login');
        return;
      }
      this.setState({
        user: user.user,
        isLoggedIn: true,
        isAdmin: user.user.role !== 'admin' ? false : true,
      });
    }
    render() {
      // return <WrappedComponent user={this.props} />;
      return (
        <div>
          <WrappedComponent
            data={this.state}
            props={this.props}
            logout={this.logout}
          />
        </div>
      );
    }
  }

  const mapStateToProps = ({ user }) => ({
    user,
  });

  return connect(mapStateToProps, { getProfile })(withRouter(Auth));
};

export default Auth;
