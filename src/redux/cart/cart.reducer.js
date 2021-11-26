import CartActionTypes from "./cart.types";
const INITAIL_STATE = {
  hidden: true,
  cartItems: []
};

const CartReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEMS:
      return {
        ...state,
        CartItems: [...state.CartItems, action.payload]
      };
    default:
      return state;
  }
};
export default CartReducer;
