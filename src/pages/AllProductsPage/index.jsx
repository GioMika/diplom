import Products from "../../comonents/Products/Index";
import { useDispatch, useSelector } from "react-redux";
import allProducts from "../../request/allProducts";
import { useEffect } from "react";



function AllProductsPage() {

  const dispstch = useDispatch();
  const allproducsts = useSelector((state) => state.products.list);

  useEffect(() => {
    dispstch(allProducts());
  }, [dispstch]);
  return (
    <div>
      <Products producsts = {allproducsts}/>
    </div>
  );
}

export default AllProductsPage;
