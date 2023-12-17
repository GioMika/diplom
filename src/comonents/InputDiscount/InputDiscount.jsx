import flowers from "./assest/flowers.svg"
import styles from "./inputDiscount.module.css"

function InputDiscount(){

  return(
    <section className={styles.section}>
      <h2 className={styles.text_h2}>5% off on the first order</h2>
      <div className={styles.all_elements}>
        <img className={styles.image} src={flowers} alt="flowers" />
        
    <form className={styles.all_inputs}>
  <input placeholder="Name" className={styles.input} type="text" />
  <input placeholder="Phone number" className={styles.input} type="text" />
  <input placeholder="Email" className={styles.input} type="text" />
  <button className={styles.btn}>Get a discount</button>
    </form>
    </div>

    </section>
  )
}

export default InputDiscount;