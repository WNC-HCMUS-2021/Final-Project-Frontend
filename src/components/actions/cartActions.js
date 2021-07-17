import axios from "axios";
import { CART_ADD_ITEM, CART_EMPTY, CART_REGISTER_ITEMS_FAIL, CART_REGISTER_ITEMS_REQUEST, CART_REGISTER_ITEMS_SUCCESS, CART_REMOVE_ITEM } from "../../constants/cartConstants";

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
            teacher: res.data.data.teacher
        }
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (academyId) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: academyId
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const registerFromCart = (userToken, listAcademy) => async (dispatch, getState) => {
    dispatch({ type: CART_REGISTER_ITEMS_REQUEST });
    try {
        const { data } = await axios.post(
            "http://localhost:5000/api/user/register-academy",
            listAcademy,
            {
                headers: { "x-access-token": userToken},
            }
        );
        dispatch({
            type: CART_REGISTER_ITEMS_SUCCESS,
            payload: data.message,
        });
        dispatch({ type: CART_EMPTY });
        localStorage.removeItem('cartItems');
    } catch (error) {
        dispatch({ type: CART_REGISTER_ITEMS_FAIL, payload: error.message });
    }
};