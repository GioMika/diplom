import { createSlice } from "@reduxjs/toolkit";
import { getProductsBycategory } from "../../request/allProducts";


const productByCategory = createSlice({
  name: 'productByCategory',
  initialState: {
    status: null,
    list: {
      data:[]
    },
  },
  reducers: {
    sortProductsCat(state, action) {
      if (action.payload === "low-high") {
        state.list.data.sort((a, b) =>  a.price - b.price)
      }
      else if (action.payload === "high-low") {
      state.list.data.sort((a, b) =>   b.price - a.price)
      } 
       else if (action.payload === "titleAsc") {
        state.list.data.sort((a, b) => a.title.localeCompare(b.title))
      } else if (action.payload === "titleDesc") {
        state.list.data.sort((a, b) => b.title.localeCompare(a.title))
      } else {
        state.list.data.sort((a, b) => a.id - b.id)
      }
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProductsBycategory.pending, (state) => {
        state.status = 'pandung'
      })
      .addCase(getProductsBycategory.fulfilled, (state, action) => {
      const {data} = action.payload
        state.list.data = data.map((elem) => ({...elem, showProduct: true }))
      })
      .addCase(getProductsBycategory.rejected, (state) => {
        state.status = 'rejected'
      })
  }
})

export const {sortProductsCat} = productByCategory.actions
export default productByCategory.reducer;


