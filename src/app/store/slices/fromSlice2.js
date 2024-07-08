const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
   selectConcern: '',
   concernArea: '',
   detailsConcern: '',
}

export const formSlice2 = createSlice({
   name: 'form2',
   initialState,
   reducers: {
      getData: (state) => state,
      crateData: (state, action) => {
         const { selectConcern, concernArea, detailsConcern } = action.payload;
         state.selectConcern = selectConcern;
         state.concernArea = concernArea;
         state.detailsConcern = detailsConcern;
      }
   }
})

export const { getData, crateData } = formSlice2.actions;

export default formSlice2.reducer;