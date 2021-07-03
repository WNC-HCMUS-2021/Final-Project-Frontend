import axios from "axios";
import { ACADEMY_LIST_FAIL, ACADEMY_LIST_REQUEST, ACADEMY_LIST_SUCCESS } from "../../constants/academyConstants";

export const listAcademys = async (dispatch) => {
    dispatch({
        type: ACADEMY_LIST_REQUEST,
    });
    try {
        const res = await axios.get("http://localhost:5000/api/academy/search?keyword=");
        dispatch({type: ACADEMY_LIST_SUCCESS, payload: res.data.data });
    } catch (err) {
        dispatch({type: ACADEMY_LIST_FAIL, payload: err.message });
    }
}