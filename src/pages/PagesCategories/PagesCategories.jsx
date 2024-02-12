import styles from "./styles.module.css"
import { Link } from "react-router-dom";
import Categories2 from "../../comonents/Categories/Categories 2";
function PagesCategories() {
  return (
    <>
      <div className={styles.btns}>
        <Link className={styles.link} to={'/'}>
          <button className={styles.btn}>Main page</button>
        </Link>
        <span className={styles.span}></span>
        <Link className={styles.link} to={'/products'}>
          <button className={styles.btn}>All products</button>
        </Link>
      </div>
      <Categories2 />
    </>
  );
}
export default PagesCategories;

