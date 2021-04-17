import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from "redux"
import Reducer from "./reducers/Reducer"
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    Reducer
})

// const Store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware())

// // console.log("store", Store.getState());
// export default Store


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;