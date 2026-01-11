import { configureStore } from '@reduxjs/toolkit';
const appsStore = configureStore({ reducer:{
    // cart: cartReducer;
} });

export default appsStore;