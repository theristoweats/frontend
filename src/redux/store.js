// import { configureStore, combineReducers, createStore, compose, applyMiddleware, } from "@reduxjs/toolkit";
import { combineReducers, createStore, compose, applyMiddleware, } from "redux";
import thunk from 'redux-thunk';

import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import{ 
  productListReducer
}from '../reducers/productReducer';

import {
  cartListReducer,
  cartAddToCartReducer,
  itemsInCartReducer
}from '../reducers/cartReducer';


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
 
const rootReducre = combineReducers({
  user:userReducer, 
  cart:cartReducer,
  productList:productListReducer,
  cart2:cartListReducer,
  addToCart:cartAddToCartReducer,
  cartItems:itemsInCartReducer,
})

// const persistedReducer = persistReducer(persistConfig, rootReducre);

// const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducre,
    composeEnhancer(applyMiddleware(thunk))
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
); 

// export let persistor = persistStore(store);
export default store;

