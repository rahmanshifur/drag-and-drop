const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   data: JSON.parse(localStorage.getItem('form1Data')) || []
}

export const formSlice1 = createSlice({
   name: 'form1',
   initialState,
   reducers: {
      getData: (state) => state,
      createData: (state, action) => {
         state.data.push(action.payload);
         localStorage.setItem('form1Data', JSON.stringify(state.data));
      },
      loadData: (state, action) => {
         state.data = action.payload;
      }
   }
})

export const { createData, loadData } = formSlice1.actions;
export default formSlice1.reducer;