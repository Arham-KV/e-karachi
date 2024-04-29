import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import paymentReducer from "./paymentSlice"

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        payment: paymentReducer
    },
    devTools: true
})