import { createSlice } from '@reduxjs/toolkit'


export const stroiSlice = createSlice({
    name: "stroi",
    initialState: {
        products: []
    },
    reducers: {
        setStroi(state, action) {
            state.products = action.payload
        }
    }
})

export const { setStroi } = stroiSlice.actions;

export const stroiReducer = stroiSlice.reducer;

