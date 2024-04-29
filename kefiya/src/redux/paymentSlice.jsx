// paymentStatusSlice.js

import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     paymentStatus: 'pending'
// }

// export const paymentSlice = createSlice({
//     name: 'payment',
//     initialState,
//     reducers: {
//         setPaymentStatus: (state, action) => {
//             state.paymentStatus = action.payload;
//         },
//         clearPaymentStatus: (state) => {
//             state.paymentStatus = 'pending';
//         }
//     }
// });

// export const { addStatus, removeStatus } = paymentSlice.actions

// export default paymentSlice.reducer


const initialState = {
    paymentStatus: 'pending'
};

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setPaymentStatus: (state, action) => {
            state.paymentStatus = action.payload;
        },
        clearPaymentStatus: (state) => {
            state.paymentStatus = 'pending';
        }
    }
});

export const { setPaymentStatus, clearPaymentStatus } = paymentSlice.actions;
export default paymentSlice.reducer;
