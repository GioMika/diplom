import Products from "../../comonents/Products/Index";
import { useDispatch, useSelector } from "react-redux";
import allProducts from "../../request/allProducts";
import { useEffect } from "react";
import SortForm from "../../comonents/FilterForms/SortForm";
import SaleForm from "../../comonents/FilterForms/SaleForm";
import FilterForm from "../../comonents/FilterForms/FilterForm";


function AllProductsPage() {


  const dispatch = useDispatch();
  const allproducsts = useSelector((state) => state.products.list);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);


  return (
    <div>
      <SortForm />
      <SaleForm />
      <FilterForm/>
      <Products products = {allproducsts}/>
    </div>
  );
}

export default AllProductsPage;
