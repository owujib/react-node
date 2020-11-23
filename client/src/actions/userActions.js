import axios from 'axios';
import { LOGIN, LOGIN_ERR, GET_PROFILE, GET_PROFILE_ERR } from './types';

export function login(data) {
  return function (dispatch) {
    axios
      .post('http://localhost:4000/api/user/login', data)
      .then((response) => {
        localStorage.setItem('auth_token', response.data.message.token);
        return dispatch({
          type: LOGIN,
          payload: response.data.message,
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
          payload: err.response.data,
        });
      });
  };
}

export function getProfile() {
  return function (dispatch) {
    axios
      .get('http://localhost:4000/api/user/profile', {
        headers: {
          auth_token: localStorage.getItem('auth_token'),
        },
      })
      .then((response) => {
        localStorage.setItem('auth_token', response.data);
        return dispatch({
          type: GET_PROFILE,
          payload: response.data,
        });
      })
      .catch((err) => {
        return dispatch({
          type: GET_PROFILE_ERR,
          payload: err.response.data,
        });
      });
  };
}
