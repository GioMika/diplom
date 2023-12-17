import Main from "../../comonents/Main/Main";
import Categories from "../../comonents/Categories/Categories";
import InputDiscount from "../../comonents/InputDiscount/InputDiscount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import allProducts from "../../request/allProducts";
import Products from "../../comonents/Products/Index";

function MainPage() {
  const dispatch = useDispatch()

  useEffect(() => {
dispatch(allProducts())
  },[dispatch])

const getProduct = useSelector((state) => state.products?.list)

const discountProducts = getProduct.filter((elem) => {
return elem.discont_price !== null
})


const discountFilter = discountProducts.slice(0,4)
console.log(discountFilter);

  return (
    <div>
       <Main/>
      <Categories show4 = {true}/>
      <InputDiscount />
    <Products producsts={discountFilter} />
    </div>
  )
}

export default MainPage;