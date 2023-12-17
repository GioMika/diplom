import { createSlice } from "@reduxjs/toolkit";
import { getProductsBycategory } from "../../request/allProducts";


const productByCategory = createSlice({
  name: 'productByCategory',
  initialState: {
    status: null,
    list: {}
  },
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(getProductsBycategory.pending, (state) => {
        state.status = 'pandung'

      })
      .addCase(getProductsBycategory.fulfilled, (state, action) => {
        state.list = action.payload

      })
      .addCase(getProductsBycategory.rejected, (state) => {
        state.status = 'rejected'

      })
  }
})

export default productByCategory.reducer;


