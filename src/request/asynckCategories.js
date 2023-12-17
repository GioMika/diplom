import { createAsyncThunk } from "@reduxjs/toolkit";


 const getCategories = createAsyncThunk('categories/getCategories', async() => {
const url = 'http://localhost:3333/categories/all'
try{
  const respons = await fetch(url)
 const data = await respons.json()
 return data
}catch(error){
 throw error
}
})

export default getCategories;