import axios from "axios";
import { ACADEMY_CATEGORY_LIST_FAIL, 
    ACADEMY_CATEGORY_LIST_REQUEST, 
    ACADEMY_CATEGORY_LIST_SUCCESS, 

    ACADEMY_DETAILS_FAIL, 
    ACADEMY_DETAILS_REQUEST, 
    ACADEMY_DETAILS_SUCCESS, 

    ACADEMY_LIST_FAIL, 
    ACADEMY_LIST_REQUEST, 
    ACADEMY_LIST_SUCCESS, 

    ACADEMY_LIST_RELATED_FAIL, 
    ACADEMY_LIST_RELATED_REQUEST, 
    ACADEMY_LIST_RELATED_SUCCESS, 

    ACADEMY_LIST_SEARCH_CATEGORY_FAIL, 
    ACADEMY_LIST_SEARCH_CATEGORY_REQUEST, 
    ACADEMY_LIST_SEARCH_CATEGORY_SUCCESS, 

    ACADEMY_LIST_SEARCH_FAIL, 
    ACADEMY_LIST_SEARCH_REQUEST, 
    ACADEMY_LIST_SEARCH_SUCCESS, 

    ACADEMY_REVIEW_CREATE_FAIL, 
    ACADEMY_REVIEW_CREATE_REQUEST, 
    ACADEMY_REVIEW_CREATE_SUCCESS, 

    ACADEMY_REVIEW_GET_FAIL, 
    ACADEMY_REVIEW_GET_REQUEST, 
    ACADEMY_REVIEW_GET_SUCCESS, 

    ACADEMY_WATCHLIST_CREATE_FAIL, 
    ACADEMY_WATCHLIST_CREATE_REQUEST, 
    ACADEMY_WATCHLIST_CREATE_SUCCESS,

    ACADEMY_OUTLINE_DETAIL_FAIL, 
    ACADEMY_OUTLINE_DETAIL_REQUEST, 
    ACADEMY_OUTLINE_DETAIL_SUCCESS, 
    
    ACADEMY_OUTLINE_FAIL, 
    ACADEMY_OUTLINE_REQUEST, 
    ACADEMY_OUTLINE_SUCCESS } from "../../constants/academyConstants";

export const listAcademys = async (dispatch) => {
    dispatch({
        type: ACADEMY_LIST_REQUEST,
    });
    try {
        const resAll = await axios.get("http://localhost:5000/api/academy/search?keyword=");
        const resOutstanding = await axios.get("http://localhost:5000/api/academy/top4highlight");
        const resMostView = await axios.get("http://localhost:5000/api/academy/top10view");
        const resLatest = await axios.get("http://localhost:5000/api/academy/top10latest");
        const resCate = await axios.get("http://localhost:5000/api/category/top4category");
        dispatch({
            type: ACADEMY_LIST_SUCCESS, 
            payload: {
                listAll: resAll.data.data,
                listOutstanding: resOutstanding.data.data,
                listMostView: resMostView.data.data,
                listLatest: resLatest.data.data,
                listCate: resCate.data.data
            }
        });
    } catch (err) {
        dispatch({type: ACADEMY_LIST_FAIL, payload: err.message });
    }
}

export const listSearchAcademys = ({ keyword = '', order = '', pageNumber = '' }) => async (dispatch) => {
    dispatch({
        type: ACADEMY_LIST_SEARCH_REQUEST,
    });
    try {
        let res;
        if (order === "lowtohigh") {
            res = await axios.get(`http://localhost:5000/api/academy/search?keyword=${keyword}&price=asc&page=${pageNumber}&limit=3`);
        }
        if (order === "hightolow") {
            res = await axios.get(`http://localhost:5000/api/academy/search?keyword=${keyword}&price=desc&page=${pageNumber}&limit=3`);
        }
        if (order === "toprated") {
            res = await axios.get(`http://localhost:5000/api/academy/search?keyword=${keyword}&rate=desc&page=${pageNumber}&limit=3`);
        }
        if (order === "") {
            res = await axios.get(`http://localhost:5000/api/academy/search?keyword=${keyword}&page=${pageNumber}&limit=3`);
        }
        if (keyword === "all") {
            if (order === "lowtohigh") {
                res = await axios.get(`http://localhost:5000/api/academy/search?keyword=&price=asc&page=${pageNumber}&limit=3`);
            }
            if (order === "hightolow") {
                res = await axios.get(`http://localhost:5000/api/academy/search?keyword=&price=desc&page=${pageNumber}&limit=3`);
            }
            if (order === "toprated") {
                res = await axios.get(`http://localhost:5000/api/academy/search?keyword=&rate=desc&page=${pageNumber}&limit=3`);
            }
            else {
                res = await axios.get(`http://localhost:5000/api/academy/search?keyword=&page=${pageNumber}&limit=3`);
            }
        }
        dispatch({
            type: ACADEMY_LIST_SEARCH_SUCCESS, 
            payload: res.data.data
        });
    } catch (err) {
        dispatch({type: ACADEMY_LIST_SEARCH_FAIL, payload: err.message });
    }
}

export const listSearchCategoryAcademys = (categoryId, order, pageNumber) => async (dispatch) => {
    dispatch({
        type: ACADEMY_LIST_SEARCH_CATEGORY_REQUEST,
    });
    try {
        let res;
        if (order === "lowtohigh") {
            res = await axios.get(`http://localhost:5000/api/academy/search?category=${categoryId}&price=asc&page=${pageNumber}&limit=3`);
        }
        if (order === "hightolow") {
            res = await axios.get(`http://localhost:5000/api/academy/search?category=${categoryId}&price=desc&page=${pageNumber}&limit=3`);
        }
        if (order === "toprated") {
            res = await axios.get(`http://localhost:5000/api/academy/search?category=${categoryId}&rate=desc&page=${pageNumber}&limit=3`);
        }
        if (order === "") {
            res = await axios.get(`http://localhost:5000/api/academy/category/${categoryId}&page=${pageNumber}&limit=3`);
        }
        
        dispatch({
            type: ACADEMY_LIST_SEARCH_CATEGORY_SUCCESS, 
            payload: res.data.data
        });
    } catch (err) {
        dispatch({type: ACADEMY_LIST_SEARCH_CATEGORY_FAIL, payload: err.message });
    }
}

export const listAcademyCategories = () => async (dispatch) => {
    dispatch({
      type: ACADEMY_CATEGORY_LIST_REQUEST,
    });
    try {
      const res = await axios.get("http://localhost:5000/api/category");
      dispatch({ type: ACADEMY_CATEGORY_LIST_SUCCESS, payload: res.data.data });
    } catch (error) {
      dispatch({ type: ACADEMY_CATEGORY_LIST_FAIL, payload: error.message });
    }
  };

export const detailsAcademy = (academyId) => async (dispatch) => {
    dispatch({ type: ACADEMY_DETAILS_REQUEST, payload: academyId });

    try {
      const res = await axios.get('http://localhost:5000/api/academy/detail/' + academyId);
      dispatch({ type: ACADEMY_DETAILS_SUCCESS, payload: res.data.data });
    } catch (err) {
      dispatch({ type: ACADEMY_DETAILS_FAIL, payload: err.message });
    }
};

export const listRelatedAcademys = (academyId) => async (dispatch) => {
    dispatch({
        type: ACADEMY_LIST_RELATED_REQUEST,
    });
    try {
        const res = await axios.get(`http://localhost:5000/api/academy/${academyId}/related`);
        dispatch({
            type: ACADEMY_LIST_RELATED_SUCCESS, 
            payload: res.data.data
        });
    } catch (err) {
        dispatch({type: ACADEMY_LIST_RELATED_FAIL, payload: err.message });
    }
}

export const listOutlineAcademy = (academyId) => async (dispatch) => {
    dispatch({
        type: ACADEMY_OUTLINE_REQUEST,
    });
    try {
        const res = await axios.get(`http://localhost:5000/api/academy/outline/${academyId}`);
        dispatch({
            type: ACADEMY_OUTLINE_SUCCESS, 
            payload: res.data.data
        });
    } catch (err) {
        dispatch({type: ACADEMY_OUTLINE_FAIL, payload: err.message });
    }
}

export const detailAcademyOutline = (outlineId) => async (dispatch) => {
    dispatch({ type: ACADEMY_OUTLINE_DETAIL_REQUEST, payload: outlineId });

    try {
      const res = await axios.get('http://localhost:5000/api/outline/detail/' + outlineId);
      dispatch({ type: ACADEMY_OUTLINE_DETAIL_SUCCESS, payload: res.data.data });
    } catch (err) {
      dispatch({ type: ACADEMY_OUTLINE_DETAIL_FAIL, payload: err.message });
    }
};
      
export const addToWatchList = (academyId, userToken) => async (dispatch) => {
    dispatch({ type: ACADEMY_WATCHLIST_CREATE_REQUEST });
    try {
        const { data } = await axios.post(
            `http://localhost:5000/api/user/watch-list/${academyId}`,
            {},
            {
                headers: { "x-access-token": userToken },
            }
        );
        dispatch({
            type: ACADEMY_WATCHLIST_CREATE_SUCCESS,
            payload: data.message,
        }); 
    } catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: ACADEMY_WATCHLIST_CREATE_FAIL, payload: message });
        
    }
};

export const createReview = (userToken, review) => async (dispatch) => {
    dispatch({ type: ACADEMY_REVIEW_CREATE_REQUEST });
    try {
        const { data } = await axios.post(
            "http://localhost:5000/api/user/rate",
            review,
            {
                headers: { "x-access-token": userToken },
            }
        );
        dispatch({
            type: ACADEMY_REVIEW_CREATE_SUCCESS,
            payload: data.review,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: ACADEMY_REVIEW_CREATE_FAIL, payload: message });
    }
};

export const getReviews = (academyId) => async (dispatch) => {
    dispatch({ type: ACADEMY_REVIEW_GET_REQUEST });

    try {
      const res = await axios.get(`http://localhost:5000/api/academy/${academyId}/rate`);
      dispatch({ type: ACADEMY_REVIEW_GET_SUCCESS, payload: res.data.data });
    } catch (err) {
      dispatch({ type: ACADEMY_REVIEW_GET_FAIL, payload: err.message });
    }
};