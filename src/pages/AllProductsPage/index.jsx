import Products from "../../comonents/Products/Index";
import { useDispatch, useSelector } from "react-redux";
import allProducts from "../../request/allProducts";
import { useEffect } from "react";
import SortForm from "../../comonents/FilterForms/SortForm";
import SaleForm from "../../comonents/FilterForms/SaleForm";
import FilterForm from "../../comonents/FilterForms/FilterForm";
import styles from './styles.module.css'

function AllProductsPage() {
  const dispatch = useDispatch();
  const allproducsts = useSelector((state) => state.products.list);
  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <div className={styles.d}>
       <h1 className={styles.text_H1}>Tools and equipment</h1>
       <div className={styles.forms}>
      <SortForm />
      <SaleForm />
      <FilterForm/>
      </div>
      <Products products = {allproducsts}/>
    </div>
  );
}

export default AllProductsPage;
