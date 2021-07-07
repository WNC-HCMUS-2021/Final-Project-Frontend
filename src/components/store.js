import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { academyListReducer, academyDetailsReducer, academyListSearchReducer, academyCategoryListReducer } from './reducers/academyReducers';
import { cartReducer } from './reducers/cartReducers';

const initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    }
};
const reducer = combineReducers({
    academyList: academyListReducer,
    academyListSearch: academyListSearchReducer,
    academyCategoryList: academyCategoryListReducer,
    academyDetails: academyDetailsReducer,
    cart: cartReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;


