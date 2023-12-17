import styles from "./styles.module.css"
import Categories from "../../comonents/Categories/Categories";

function PagesCategories() {
  return (
    <>
      <div className={styles.btns}>
        <button className={styles.btn}>Main page</button>
        <span className={styles.span}></span>
        <button className={styles.btn}>Categories</button>
      </div>
      <section className={styles.sectionBlock}>
        <Categories />
      </section>
    </>
  );
}



export default PagesCategories;

