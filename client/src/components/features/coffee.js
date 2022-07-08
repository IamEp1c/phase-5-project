import { createSlice } from "@reduxjs/toolkit"


const initialState = []

export const coffeeSlice = createSlice({

    name: "coffee",
    initialState: {value: initialState },  
    reducers: {
        setCoffees: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { setCoffees } = coffeeSlice.actions
export default coffeeSlice.reducer; 