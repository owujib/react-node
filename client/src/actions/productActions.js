import axios from 'axios';

import {
  GET_PRODUCTS,
  GET_PRODUCT_ERR,
  CREATE_PRODUCT,
  CREATE_PRODUCT_ERR,
} from './types';

export const getProduct = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:4000/api/product/product-list')
      .then((response) => {
        return dispatch({
          type: GET_PRODUCTS,
          payload: response.data.message,
        });
      })
      .catch((err) => {
        return dispatch({
          type: GET_PRODUCT_ERR,
          payload: err,
        });
      });
  };
};

export const createProduct = (incomingData) => {
  return (dispatch) => {
    axios
      .post('http://localhost:4000/api/product/create-product', incomingData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        return dispatch({
          type: CREATE_PRODUCT,
          payload: response.data.message,
        });
      })
      .catch((err) => {
        return dispatch({
          type: CREATE_PRODUCT_ERR,
          payload: err.response.data,
        });
      });
  };
};
