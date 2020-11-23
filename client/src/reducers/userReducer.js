import {
  LOGIN,
  LOGIN_ERR,
  GET_PROFILE_ERR,
  GET_PROFILE,
} from '../actions/types';

const initialState = {
  user: null,
  err: null,
  redirect: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        redirect: true,
      };

    case LOGIN_ERR:
      return {
        ...state,
        err: action.payload,
        redirect: false,
      };
    case GET_PROFILE:
      return {
        ...state,
        user: action.payload,
        redirect: true,
      };
    case GET_PROFILE_ERR:
      return {
        ...state,
        err: action.payload,
        redirect: false,
      };

    default:
      return state;
  }
}
