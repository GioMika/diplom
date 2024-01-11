
import { Link } from "react-router-dom";
import styles from "./main.module.css"

function Main() {

  return (
    <main className={styles.main}>
      <div className={styles.img}>
        <div className={styles.text_h1}>
          <h1>Amazing Discounts on Garden Products!</h1>
        
          <button className={styles.btn}>Check out</button>
          
        </div>
      </div>
      <div className={styles.elementsCategories}>
        <div className={styles.ItemsCategories}>
        <h2 className={styles.textCategories}>Categories</h2>
        <Link className={styles.link} to={'/categories'}>
        <button className={styles.btnCategories}>All categories </button>
        </Link>
        </div>
      </div>
    </main>
  )
}

export default Main;