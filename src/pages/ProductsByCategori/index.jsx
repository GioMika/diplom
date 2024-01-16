import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsBycategory } from "../../request/allProducts";
import Products from "../../comonents/Products/Index";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import SortForm from "../../comonents/FilterForms/SortForm";
import FilterForm from "../../comonents/FilterForms/FilterForm";
import SaleForm from "../../comonents/FilterForms/SaleForm";
import { Link } from "react-router-dom";



function ProductsByCategori() {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsBycategory(id));
  }, []);

  const getByCategories = useSelector((state) => state.productByCategory.list);
  // const categoryTitle = getByCategories.category;
  const getBycategoryesData = getByCategories?.data || [];

  return (
    <div>
      <div className={styles.elementsForms}>

      <div className={styles.btns}>
      <Link to={'/'}
      className={styles.link}>
        <button className={styles.btn}>Main page</button>
        </Link>

        <Link to={'/products'}
        className={styles.link}>
        <button className={styles.btn}>All products</button>
        </Link>

        <Link to={'/sale'}
         className={styles.link}>
        <button className={styles.btn}>All Sales</button>
        </Link>
      </div>
        <h1>Tools and equipment</h1>
        <div className={styles.forms}>
          <FilterForm />
          <SaleForm />
          <SortForm />
        </div>
      </div>
      <Products products={getBycategoryesData} />
    </div>
  );
}

export default ProductsByCategori;
