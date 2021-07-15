import { CART_ADD_ITEM, CART_REGISTER_ITEMS_FAIL, CART_REGISTER_ITEMS_REQUEST, CART_REGISTER_ITEMS_RESET, CART_REGISTER_ITEMS_SUCCESS, CART_REMOVE_ITEM } from '../../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.academy === item.academy);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.academy === existItem.academy ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return { ...state, cartItems: state.cartItems.filter(x => x.academy !== action.payload) };

    default:
      return state;
  }
};

export const registerReducer = (state = { loading: false, cartItems: [] }, action) => {
  switch (action.type) {
    case CART_REGISTER_ITEMS_REQUEST:
      return { loading: true };
    case CART_REGISTER_ITEMS_SUCCESS:
      return { ...state, loading: false, success: true, cartItems: [] };
    case CART_REGISTER_ITEMS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case CART_REGISTER_ITEMS_RESET:
      return {};
    default:
      return state; 
  }
};