/* eslint-disable no-restricted-globals */
import styles from "./styles.module.css";
import {
  countPlus,
  countMinus,
  deleteItem,
} from "../../store/allSlices/cartSlice";
import { useDispatch } from "react-redux";



function CartItem({ image, title, id, price, count, discont_price }) {
  let sumCount = discont_price === null ? count * price : count * discont_price;

  const dispatch = useDispatch();




  
  return (
    <div className={styles.main}>
      <div className={styles.allElements}>
        <div className={styles.deletedProducts}>
          <p className={styles.titleText}>{title}</p>
          <h4
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(deleteItem(id))}
          >
            X
          </h4>
        </div>

        <div className={styles.elementsCounter}>
          <img
            className={styles.imgList}
            src={`http://localhost:3333${image}`}
            alt="no"
          />
          <button
            onClick={() => dispatch(countPlus(id))}
            className={styles.btn}
          >
            +
          </button>
          <p className={styles.counrText}>{count}</p>
          <button
            onClick={() => dispatch(countMinus(id))}
            className={styles.btn}
          >
            -
          </button>

          <p
            className={
              discont_price === null
                ? styles.prise_sale_none
                : styles.prise_sale
            }
          >
            {discont_price}
          </p>
          <p
            className={
              discont_price === null ? styles.prise_sale : styles.prise_default }>
            {`$${price}`}
          </p>

          <div className={styles.product_prise}>
            <p className={styles.counterText}>{"Quantity : " + sumCount}</p>
          </div>
        </div>
      </div>
    </div>


 
  );
}

export default CartItem;
