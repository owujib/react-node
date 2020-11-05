import {
  GET_PRODUCTS,
  GET_PRODUCT_ERR,
  CREATE_PRODUCT,
  CREATE_PRODUCT_ERR,
} from '../actions/types';

const initialState = {
  products: [],
  product: {},
  err: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCT_ERR:
      return {
        ...state,
        err: action.payload,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case CREATE_PRODUCT_ERR:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
}
