import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../utils/slices/cartSlice"
const appsStore = configureStore({ reducer:{
    cart: cartReducer
},
 });

export default appsStore;