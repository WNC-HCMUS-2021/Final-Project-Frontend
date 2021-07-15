import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { academyListReducer, academyDetailsReducer, academyListSearchReducer, academyCategoryListReducer, academyListSearchCategoryReducer, academyListRelatedReducer, academyReviewCreateReducer } from './reducers/academyReducers';
import { cartReducer } from './reducers/cartReducers';

const initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    }
};
const reducer = combineReducers({
    academyList: academyListReducer,
    academyListSearch: academyListSearchReducer,
    academyListSearchCategory: academyListSearchCategoryReducer,
    academyCategoryList: academyCategoryListReducer,
    academyDetails: academyDetailsReducer,
    academyListRelated: academyListRelatedReducer,
    cart: cartReducer,
    academyReviewCreate: academyReviewCreateReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;


