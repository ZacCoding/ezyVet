import { ADD_CART, REMOVE_CART } from "../actionTypes";

const initialState = {
  allCartItems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CART: {
      const { productName } = action.payload;
      return {
        ...state,
        allCartItems: [...state.allCartItems.concat(productName)]
      };
    }
    case REMOVE_CART: {
      const { productName } = action.payload;
      var array = [...state.allCartItems.filter(item => item !== productName)]
      var array2 = [...state.allCartItems.filter(item => item === productName)]
      array2.splice(0,1)
      const data = array.concat(array2)
      return {
        ...state,
        allCartItems: data,
      };
    }
    default:
      return state;
  }
}