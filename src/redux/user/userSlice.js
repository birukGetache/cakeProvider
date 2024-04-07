import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'biruk'
}

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        changeName(state, action) {
            state.name = action.payload
        }
    } 
})

export const { changeName } = userSlice.actions
export default userSlice.reducer
