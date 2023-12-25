import { createSlice } from "@reduxjs/toolkit";



let getLocalItems = JSON.parse(localStorage.getItem('item')) ?? []

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list:getLocalItems
 },

  reducers: {
    addItemCart(state, action) {
      const productCart = state.list.find(({ id }) => {
        return id === action.payload.id
      })

      if (!productCart) {
        state.list.push({
          ...action.payload, count: 1,
        })
      } else {
        productCart.count++
      }

      localStorage.setItem('item',JSON.stringify(state.list))
    },

    countPlus(state,action){
      state.list.find(el  =>  el.id === action.payload).count++
      localStorage.setItem('item',JSON.stringify(state.list))
    },
    countMinus(state,action){
    const product =   state.list.find(el  =>  el.id === action.payload)
    
      
  if(product.count > 1){
    product.count--
  }else{
 state.list =  state.list.filter((elem) =>  elem.id !== action.payload)
  }
  localStorage.setItem('item',JSON.stringify(state.list))

    },
    deleteItem(state,action){
      state.list =  state.list.filter((elem) =>  elem.id !== action.payload)
      localStorage.setItem('item',JSON.stringify(state.list))
    },



  }
})


export const {addItemCart,countPlus,countMinus,deleteItem} = cartSlice.actions
export default cartSlice.reducer