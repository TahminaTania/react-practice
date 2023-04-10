import { createStore } from "redux";
import cartSlice from "./CartActions";
import { configureStore } from "@reduxjs/toolkit";



const store= configureStore({
    reducer:{
        cart:cartSlice.reducer,
    },
});

export default store