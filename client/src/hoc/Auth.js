import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../actions/userActions';
const Auth = (WrappedComponent, reload, adminRoute = null) => {
  class Auth extends React.Component {
    state = {
      user: null,
    };

    // static getDerivedStateFromProps(state, props) {
    //   if (props.err !== state.err) {
    //     return {
    //       err: props.err,
    //     };
    //   }
    //   return null;
    // }

    componentDidMount() {
      this.props.getProfile();
      const user = !JSON.parse(localStorage.getItem('user'))
        ? ''
        : JSON.parse(localStorage.getItem('user'));

      if (adminRoute && user.role === 'user') {
        console.log('not admin');
        this.props.history.push('/');
        return;
      }
      if (reload === false) {
        this.props.history.push('/login');
        return;
      }
      //   })
      //   .catch((err) => {
      //     if (err) {
      //       this.props.history.push('/');
      //     }
      //   });
    }
    render() {
      return <WrappedComponent user={this.props} />;
    }
  }

  const mapStateToProps = ({ user }) => ({
    user,
  });

  // return withRouter(Auth);
  return connect(mapStateToProps, { getProfile })(withRouter(Auth));
};

export default Auth;
