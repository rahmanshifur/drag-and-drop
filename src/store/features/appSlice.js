import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const FORM_EMPTY_STATE = {
  name: "",
  gender: "",
  concern: "",
  concerns: [],
  dob: "",
  eyeConcern: "",
  detailedConcern: "",
};

const initialState = {
  form: FORM_EMPTY_STATE,
  layout: [
    { id: uuidv4(), title: "Incoming Request", items: [] },
    { id: uuidv4(), title: "Processing", items: [] },
    { id: uuidv4(), title: "Done | Updated", items: [] },
  ],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.form = action.payload;
    },
    setLayout: (state, action) => {
      state.layout = action.payload;
    },
    addCard: (state, action) => {
      const { columnId, card } = action.payload;
      const column = state.layout.find((col) => col.id === columnId);
      if (column) {
        column.items.push(card);
      }
    },
  },
});

export const { setForm, setLayout, addCard } = appSlice.actions;
export default appSlice.reducer;
