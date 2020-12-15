import axios from 'axios';
import { LOGIN, LOGIN_ERR, GET_PROFILE, GET_PROFILE_ERR } from './types';

export function login(userInput) {
  return function (dispatch) {
    axios
      .post('http://localhost:4000/api/user/login', userInput)
      .then(({ data }) => {
        let user = JSON.stringify(data.message);
        localStorage.setItem('user', user);
        return dispatch({
          type: LOGIN,
          payload: data.message,
        });
        // localStorage.setItem('auth_token', response.data.message.token);
        // this.props.history.push('/');

        // this.setState({
        //   redirect: true,
        // });
      })
      .catch((err) => {
        return dispatch({
          type: LOGIN_ERR,
          payload: err.response,
        });
      });
  };
}

export function getProfile() {
  const user = JSON.parse(localStorage.getItem('user'));
  return function (dispatch) {
    axios
      .get('http://localhost:4000/api/user/profile', {
        headers: {
          auth_token: !user ? '' : user.token,
        },
      })
      .then(({ data }) => {
        // localStorage.setItem('auth_token', response.data);
        return dispatch({
          type: GET_PROFILE,
          payload: data,
        });
      })
      .catch((err) => {
        return dispatch({
          type: GET_PROFILE_ERR,
          payload: err.response,
        });
      });
  };
}
