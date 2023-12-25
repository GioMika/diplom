import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductId } from "../../store/allSlices/singleItemSlice";
import styles from "./styles.module.css";
import { addItemCart, countPlus } from "../../store/allSlices/cartSlice";
import { singleCountPlus } from "../../store/allSlices/singleItemSlice";




function SingleItem() {
  const { product_id } = useParams();
  const productIdList = useSelector((state) => state.product.productIdList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductId(product_id));
  }, [dispatch, product_id]);

  return (
    <div className={styles.main}>
      {productIdList.map((elem,index) => {
        return (
          <div key={index} className={styles.allElements}>
            <img
              className={styles.img}
              src={`http://localhost:3333${elem.image}`}
              alt="no"
            />
            <div  className={styles.elements}>
              <div className={styles.textDescription}>
                <h2>{elem.title}</h2>
                <div>
                  <button onClick={() => dispatch(singleCountPlus (elem.id))}>
                    +
                  </button>
                  <h1>{elem.count}</h1>
                  <button>-</button>
                  <button
                    onClick={() => dispatch(addItemCart(elem))}
                    className={styles.addProducts}
                  >
                    ADD TO CART
                  </button>
                </div>
                <h4>{elem.description}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SingleItem;
