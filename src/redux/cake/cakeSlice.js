import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCake: 10,
  };
  
const cakeSlice = createSlice({
    initialState,
    name: 'cake',
    reducers: {
        buyCake: (state) => {
            state.numOfCake -= 1
        }
    }
})

export const { buyCake } = cakeSlice.actions
export default cakeSlice.reducer