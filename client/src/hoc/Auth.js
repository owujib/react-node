import React from 'react';
import axios from 'axios';

const Auth = (WrappedComponent, reload, adminRoute = null) => {
  class Auth extends React.Component {
    state = {
      user: {},
    };
    componentDidMount() {
      axios
        .get('http://localhost:4000/api/user/profile', {
          headers: { auth_token: localStorage.getItem('auth_token') },
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          localStorage.getItem('auth_token');
          console.log(data.role, adminRoute);

          if (adminRoute && data.role === 'user') {
            console.log('this is an admin');
            this.props.history.push('/');
            return;
          }
        })
        .catch((err) => {
          if (err) {
            this.props.history.push('/login');
          }
        });
    }
    render() {
      return <WrappedComponent />;
    }
  }

  return Auth;
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
