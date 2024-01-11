import { createSlice } from "@reduxjs/toolkit";
import getCategories from "../../request/asynckCategories";
import { act } from "react-dom/test-utils";


const categoriesSlice = createSlice({
  name: 'products',
  initialState: {
    status:null,
    categoriesList: []
  },
reducers:{
  

  
},

extraReducers: (builder) => 
builder
.addCase(getCategories.pending, (state) => {
  state.status = 'pending'
})
.addCase(getCategories.fulfilled, (state,action) => {
  state.status = 'fulfilld'
  state.categoriesList = action.payload
})
.addCase(getCategories.rejected, (state) => {
  state.status = 'rejected'
})
})


export default categoriesSlice.reducer