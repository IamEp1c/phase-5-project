import { createSlice } from "@reduxjs/toolkit"


const initialState = []

export const reviewsSlice = createSlice({

    name: "reviews",
    initialState: {value: initialState },  
    reducers: {
        setReviews: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { setReviews } = reviewsSlice.actions
export default reviewsSlice.reducer; 