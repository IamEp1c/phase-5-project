import { createSlice } from "@reduxjs/toolkit"


const initialState = []

export const cartSlice = createSlice({

    name: "cart",
    initialState: {value: initialState },  
    reducers: {
        setCart: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { setCart } = cartSlice.actions
export default cartSlice.reducer; 