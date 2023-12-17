import { configureStore } from "@reduxjs/toolkit";
import categoriesSlices from "./allSlices/categoriesSlice.js"
import productsSlice from "./allSlices/allProductsSlice.js"
import productsByCategorySlice from "./allSlices/productsByCategory.js";
import addProducts from "./allSlices/addProducts.js";

export const store = configureStore({
  reducer: {
    categories:categoriesSlices,
    products:productsSlice,
    productByCategory:productsByCategorySlice,
    AddToCart:addProducts,
  }
})



export default store;

