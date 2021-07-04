import axios from "axios";
import { CART_ADD_ITEM } from "../../constants/cartConstants";

export const addToCart = (academyId) => async (dispatch, getState) => {
    const res = await axios.get(`http://localhost:5000/api/academy/detail/${academyId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: res.data.data.academy_name,
            avatar: res.data.data.avatar,
            price_discount: res.data.data.price_discount,
            price: res.data.data.price,
            academy: res.data.data.academy_id,
        }
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};