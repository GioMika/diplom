import { createSlice } from "@reduxjs/toolkit";





const addProducts = createSlice({
  name : 'AddToCart',
  initialState: {
  list:[]
  }
})

export default addProducts.reducer