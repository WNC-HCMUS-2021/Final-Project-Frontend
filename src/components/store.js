import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { academyListReducer, academyDetailsReducer } from './reducers/academyReducers';

const initialState = {};
const reducer = combineReducers({
    academyList: academyListReducer,
    academyDetails: academyDetailsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;


