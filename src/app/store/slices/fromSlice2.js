const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
   data: []
}

export const formSlice2 = createSlice({
   name: 'form2',
   initialState,
   reducers: {
      getData: (state) => state,
      createData: (state, action) => {
         state.data.push(action.payload)
      }
   }
})

export const { getData, createData } = formSlice2.actions;

export default formSlice2.reducer;