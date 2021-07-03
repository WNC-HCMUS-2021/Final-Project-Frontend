import { ACADEMY_LIST_FAIL, ACADEMY_LIST_REQUEST, ACADEMY_LIST_SUCCESS } from "../../constants/academyConstants";

export const academyListReducer = (state = { loading: true, academys: [] }, action) => {
    switch (action.type) {
        case ACADEMY_LIST_REQUEST:
            return { loading: true };
        case ACADEMY_LIST_SUCCESS:
            return { loading: false, academys: action.payload };
        case ACADEMY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}