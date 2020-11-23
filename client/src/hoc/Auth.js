import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../actions/userActions';

const Auth = (WrappedComponent, reload, adminRoute = null) => {
  class Auth extends React.Component {
    state = {
      user: null,
    };

    static getDerivedStateFromProps(props, state) {
      if (props.err !== state.err) {
        return {
          err: props.err,
        };
      }
      return null;
    }

    componentDidMount() {
      //   axios
      //     .get('http://localhost:4000/api/user/profile', {
      //       headers: { auth_token: localStorage.getItem('auth_token') },
      //     })
      //     .then((response) => {
      //       const { data } = response;
      //       this.setState({
      //         user: data,
      //       });
      //       localStorage.getItem('auth_token');
      //       if (adminRoute && data.role === 'user') {
      //         console.log('not admin');
      //         this.props.history.push('/');
      //         return;
      //       }
      //     })
      //     .catch((err) => {
      //       if (err) {
      //         this.props.history.push('/login');
      //       }
      //     });
      this.props.getProfile();
      console.log(localStorage.getItem('auth_token'));
    }
    render() {
      console.log(this.props);
      return <WrappedComponent user={this.state.user} />;
    }
  }

  const mapStateToProps = (state) => ({
    user: state.user,
    err: state.user.err,
  });

  return connect(mapStateToProps, { getProfile })(withRouter(Auth));
};

export default Auth;

//  componentDidMount() {
//     axios
//       .get('http://localhost:4000/api/user/profile', {
//         headers: {
//           auth_token: `${localStorage.getItem('auth_token')}`,
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.role) {
//           console.log('no log');
//           if (reload) {
//             this.props.history.push('/login');
//             console.log(reload);
//           }
//         } else {
//           if (adminRoute) {
//             this.props.history.push('/login');
//             console.log(adminRoute);
//             console.log(reload);
//           } else {
//             if (reload === false) {
//               this.props.history.push('/product');
//               console.log('na me');
//             }
//           }
//         }
//       })
// .catch((err) => console.log(err))
