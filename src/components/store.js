import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { academyListReducer, academyDetailsReducer, academyListSearchReducer, academyCategoryListReducer, academyListSearchCategoryReducer, academyListRelatedReducer } from './reducers/academyReducers';
import { cartReducer, registerReducer } from './reducers/cartReducers';

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
    courseRegister: registerReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;


