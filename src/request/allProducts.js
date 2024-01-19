
import { createAsyncThunk } from "@reduxjs/toolkit";


 const allProducts = createAsyncThunk('products/allProducts ', async() => {
const url = 'http://localhost:3333/products/all'
try{
  const respons = await fetch(url)
 const data = await respons.json()
 return data
}catch(error){
 throw error
}
})

export const getProductsBycategory = createAsyncThunk
 ('productByCategory/getProductsBycategory',
  async(categoryId) => {
  const url = `http://localhost:3333/categories/${categoryId}`
  try{
    const response = await fetch(url)
   const data = await response.json()
   return  data;
  }catch(error){
   throw error
  }
  })

export default allProducts ;
