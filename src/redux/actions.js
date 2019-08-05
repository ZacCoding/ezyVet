import { ADD_CART, REMOVE_CART } from "./actionTypes";

export const addToCart = productName => ({
  type: ADD_CART,
  payload: {
    productName
  }
});

export const removeFromCart = productName => ({
  type: REMOVE_CART,
  payload: {
    productName
  }
});