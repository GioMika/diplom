
import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../../request/allProducts";




const productsSlice = createSlice({
  name: 'products',
  initialState: {
    status:null,
    list: []
  },
reducers:{

},

extraReducers: (builder) => 
builder
.addCase(allProducts.pending, (state) => {
  state.status = 'pending'
})
.addCase(allProducts.fulfilled, (state,action) => {
  state.status = 'fulfilld'
  state.list = action.payload
})
.addCase(allProducts.rejected, (state) => {
  state.status = 'rejected'
})
})


export default productsSlice.reducer