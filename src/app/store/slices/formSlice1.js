const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   name: '',
   gender: '',
   concern: ''
}

export const formSlice1 = createSlice({
   name: 'form1',
   initialState,
   reducers: {
      getData: (state) => state,
      createData: (state, action) => {
         const { name, gender, concern } = action.payload;
         state.name = name;
         state.gender = gender;
         state.concern = concern;
      }
   }
})

const { getData, createData } = formSlice1.actions;

export default formSlice1.reducer;