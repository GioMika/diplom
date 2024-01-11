import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "./styles.module.css";
import { addItemCart } from "../../store/allSlices/cartSlice";
import { countPlus } from "../../store/allSlices/cartSlice";

function SingleItem({ id, title, price, discont_price, description, image }) {
  const [localCount, setLocalCount] = useState(1);
  const cartList = useSelector((state) => state.cart);

  const addToCart = () => {
    const productInCart = cartList.find((elem) => elem.id === id);

    if (productInCart) {
      dispatch(countPlus({ id, count: localCount }));
    } else {
      dispatch(
        addItemCart({
          id,
          title,
          price,
          discont_price,
          description,
          image,
          count: localCount,
        })
      );
    }
  };

  const dispatch = useDispatch();

  const increment = () => {
    setLocalCount((currentCount) => currentCount + 1);
  };

  const decrementCount = () => {
    setLocalCount((currentCount) =>
      currentCount > 1 ? currentCount - 1 : currentCount
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.allButtons}>
        <button className={styles.btnLink}>Main page</button>
        <button className={styles.btnLink}>Categories</button>
        <button className={styles.btnTools}>Tools and equipment</button>
        <button className={styles.btnLink}>Secateurs</button>
      </div>

      <div className={styles.images}>
        <img
          className={styles.img}
          src={`http://localhost:3333${image}`}
          alt="e"
        />
      </div>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={increment}>
          +
        </button>
        <h4 className={styles.localCount}>{localCount}</h4>
        <button className={styles.btn} onClick={decrementCount}>
          -
        </button>
      </div>

      <div className={styles.information}>
        <p>{title}</p>
        <div className={styles.buttons}>
          <p
            className={
              discont_price === null
                ? styles.prise_sale_none
                : styles.prise_sale
            }
          >
            {`$${discont_price}`}
          </p>

          <p
            className={
              discont_price === null ? styles.prise_sale : styles.prise_default
            }
          >
            {`$${price}`}
          </p>
        </div>
      </div>
      <div className={styles.textDescription}>
        <p>{description}</p>
      </div>

      <button className={styles.addCart} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default SingleItem;
