import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { addItemCart } from "../../store/allSlices/cartSlice";
import { useEffect } from "react";
import allProducts from "../../request/allProducts";

function Sales() {
  const salesItems = useSelector((state) => state.products.list);
  const productDiscount = salesItems
    .filter((item) => {
      return item.discont_price;
    })
    .slice(0, 4);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <>
      <h2 className={styles.sale}>Sale</h2>
      <div className={styles.allElements}>
        {productDiscount.map((elem) => {
          return (
            <div key={elem.id} className={styles.imgList}>
              <p className={styles.procent}>
                {" "}
                {elem.discont_price
                  ? " - " +
                    Math.floor(
                      ((elem.price - elem.discont_price) / elem.price) * 100
                    ) +
                    " %"
                  : null}
              </p>

              <Link to={`/products/${elem.id}`}>
                <img
                  className={styles.imgList}
                  src={`http://localhost:3333${elem.image}`}
                  alt="phot"
                />
              </Link>

              <button
                className={styles.addProducts}
                onClick={() => dispatch(addItemCart({ count: 1, ...elem }))}
              >
                ADD TO CART
              </button>
              <p className={styles.textTitle}>{elem.title}</p>
              <div className={styles.product_prise}>
                <p
                  className={
                    elem.discont_price === null
                      ? styles.prise_sale_none
                      : styles.prise_sale
                  }
                >
                  {`$${elem.discont_price}`}
                </p>
                <p
                  className={
                    elem.discont_price === null
                      ? styles.prise_sale
                      : styles.prise_default
                  }
                >
                  {`$${elem.price}`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Sales;
