
import styles from "./main.module.css"


function Main() {
  return (
    <div className={styles.img}>
        <div className={styles.text_h1}>
          <h1>Amazing Discounts on Garden Products!</h1>
          <button className={styles.btn}>Check out</button>
      </div>
    </div>
  )
}

export default Main;