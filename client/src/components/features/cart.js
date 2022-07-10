import { createSlice } from "@reduxjs/toolkit"


const initialState = []

export const cartSlice = createSlice({

    name: "cart",
    initialState: {value: initialState },  
    reducers: {
        setCart: (state, action) => {
            state.value = action.payload
        },
        deleteItemFromCart: (state, action) => {
            const index = state.value.findIndex(object => {
                return object.id === action.payload;
              });
              state.value = state.value.splice(index, 1)
        }
    }
})
export const { setCart, deleteItemFromCart } = cartSlice.actions
export default cartSlice.reducer; 
