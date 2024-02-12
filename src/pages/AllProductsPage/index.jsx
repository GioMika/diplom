import Products from "../../comonents/Products/Index";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../store/allSlices/allProductsSlice";
import { useEffect } from "react";
import SortForm from "../../comonents/FilterForms/SortForm";
import SaleForm from "../../comonents/FilterForms/SaleForm";
import FilterForm from "../../comonents/FilterForms/FilterForm";
import styles from './styles.module.css'
import { Link } from "react-router-dom";

function AllProductsPage() {
  const dispatch = useDispatch();
  const allproducsts = useSelector((state) => state.products.list);
  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);
  return (
    <div>
      <div className={styles.btns}>
        <Link to={'/'}
          className={styles.link}>
          <button className={styles.btn}>Main page</button>
        </Link>
        <Link to={'/categories'}
          className={styles.link}>
          <button className={styles.btn}>Categories</button>
        </Link>
        <Link to={'/sale'}
          className={styles.link}>
          <button className={styles.btn}>All Sales</button>
        </Link>
      </div>
      <h1 className={styles.text_H1}>All products</h1>
      <div className={styles.forms}>
        <FilterForm />
        <SaleForm />
        <SortForm />
      </div>
      <Products products={allproducsts} />
    </div>
  );
}
export default AllProductsPage;
