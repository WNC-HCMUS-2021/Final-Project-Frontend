import axios from "axios";
import { ACADEMY_DETAILS_FAIL, ACADEMY_DETAILS_REQUEST, ACADEMY_DETAILS_SUCCESS, ACADEMY_LIST_FAIL, ACADEMY_LIST_REQUEST, ACADEMY_LIST_SEARCH_FAIL, ACADEMY_LIST_SEARCH_REQUEST, ACADEMY_LIST_SEARCH_SUCCESS, ACADEMY_LIST_SUCCESS } from "../../constants/academyConstants";

export const listAcademys = async (dispatch) => {
    dispatch({
        type: ACADEMY_LIST_REQUEST,
    });
    try {
        const resAll = await axios.get("http://localhost:5000/api/academy/search?keyword=");
        const resOutstanding = await axios.get("http://localhost:5000/api/academy/top3highlight");
        const resMostView = await axios.get("http://localhost:5000/api/academy/top10view");
        const resLatest = await axios.get("http://localhost:5000/api/academy/top10latest");
        dispatch({
            type: ACADEMY_LIST_SUCCESS, 
            payload: {
                listAll: resAll.data.data,
                listOutstanding: resOutstanding.data.data,
                listMostView: resMostView.data.data,
                listLatest: resLatest.data.data
            }
        });
    } catch (err) {
        dispatch({type: ACADEMY_LIST_FAIL, payload: err.message });
    }
}

export const listSearchAcademys = ({ keyword = '' }) => async (dispatch) => {
    dispatch({
        type: ACADEMY_LIST_SEARCH_REQUEST,
    });
    try {
        const res = await axios.get(`http://localhost:5000/api/academy/search?keyword=${keyword}`);
        dispatch({
            type: ACADEMY_LIST_SEARCH_SUCCESS, 
            payload: res.data.data
        });
    } catch (err) {
        dispatch({type: ACADEMY_LIST_SEARCH_FAIL, payload: err.message });
    }
}

export const detailsAcademy = (academyId) => async (dispatch) => {
    dispatch({ type: ACADEMY_DETAILS_REQUEST, payload: academyId });

    try {
      const res = await axios.get('http://localhost:5000/api/academy/detail/' + academyId);
      dispatch({ type: ACADEMY_DETAILS_SUCCESS, payload: res.data.data });
    } catch (err) {
      dispatch({ type: ACADEMY_DETAILS_FAIL, payload: err.message });
    }
};