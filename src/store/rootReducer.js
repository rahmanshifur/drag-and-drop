import { combineReducers } from "@reduxjs/toolkit";
import appSlice from "./features/appSlice";

const rootReducer = combineReducers({
  app: appSlice,
});

export default rootReducer;
