
import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "./cake/CakeReducer";
import cakeSlice from "./cake/cakeSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    // cake: CakeReducer,
    cake: cakeSlice,
    user: userSlice,
  },
});

export default store;