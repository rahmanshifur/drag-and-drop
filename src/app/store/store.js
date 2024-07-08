
"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import formSlice1 from "./slices/formSlice1";
import formSlice2 from "./slices/fromSlice2";

const store = configureStore({
   reducer: {
      formReuder1: formSlice1,
      formReducer2: formSlice2,
      counterReducer: counterSlice,
   }
});
export default store