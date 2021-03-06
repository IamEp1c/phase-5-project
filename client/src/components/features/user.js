import { createSlice } from "@reduxjs/toolkit"


const initialState = {}

export const userSlice = createSlice({

    name: "user",
    initialState: {value: {username: "", password: "", id: "" }},  
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = {username: "", password: "", email: "", id: "" }
        }
    }
})
export const { login, logout } = userSlice.actions
export default userSlice.reducer; 

