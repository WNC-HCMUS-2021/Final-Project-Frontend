import { ACADEMY_CATEGORY_LIST_FAIL, ACADEMY_CATEGORY_LIST_REQUEST, ACADEMY_CATEGORY_LIST_SUCCESS, ACADEMY_DETAILS_FAIL, ACADEMY_DETAILS_REQUEST, ACADEMY_DETAILS_SUCCESS, ACADEMY_LIST_FAIL, ACADEMY_LIST_REQUEST, ACADEMY_LIST_SEARCH_FAIL, ACADEMY_LIST_SEARCH_REQUEST, ACADEMY_LIST_SEARCH_SUCCESS, ACADEMY_LIST_SUCCESS } from "../../constants/academyConstants";

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

export const academyListSearchReducer = (state = { loading: true, academys: [] }, action) => {
  switch (action.type) {
      case ACADEMY_LIST_SEARCH_REQUEST:
          return { loading: true };
      case ACADEMY_LIST_SEARCH_SUCCESS:
          return { loading: false, academys: action.payload };
      case ACADEMY_LIST_SEARCH_FAIL:
          return { loading: false, error: action.payload };
      default:
          return state;
  }
}

export const academyCategoryListReducer = (
  state = { loading: true, academys: [] },
  action
) => {
  switch (action.type) {
    case ACADEMY_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case ACADEMY_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case ACADEMY_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const academyDetailsReducer = (state = { academy: {}, loading: true}, action) => {
    switch (action.type) {
      case ACADEMY_DETAILS_REQUEST:
        return { loading: true };
      case ACADEMY_DETAILS_SUCCESS:
        return { loading: false, academy: action.payload };
      case ACADEMY_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }