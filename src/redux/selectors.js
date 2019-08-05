import { products } from "../constants/constants";

export const getProducts = products;

export const getCartState = store => store.shoppingCart;

export const getCartProductList = store => getCartState(store) ? getCartState(store).allCartItems : [];
