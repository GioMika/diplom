import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemCart } from "../../store/allSlices/cartSlice";
import { Link} from "react-router-dom";

function AllSales() {

  const allSalesProduct = useSelector((state) => state.products.list);
  const producsts = allSalesProduct.filter((elem) => {
    return elem.discont_price;
  });

  const dispatch = useDispatch();

  return (
    <div className={styles.allElements}>
      {producsts.map((elem) => {

        return (
            <div className={styles.imgList}>
              <p className={styles.procent}> {elem.discont_price ? " - " + Math.floor((elem.price - elem.discont_price) / elem.price * 100) + ' %' : null}</p>
                    <Link to={`/products/${elem.id}`}>  
              <img
                className={styles.imgList} src={`http://localhost:3333${elem.image}`} alt="phot" /> </Link>
              <button
              className={styles.addProducts}   onClick={() => dispatch(addItemCart(elem))} >
                ADD TO CART
              </button>
              <p className={styles.textTitle}>{elem.title}</p>
              <div className={styles.product_prise}>
                <p
                  className={
                    elem.discont_price === null ? styles.prise_sale_none : styles.prise_sale}  >
                  {`$${elem.discont_price}`}
                </p>
                <p
                  className={
                    elem.discont_price === null ? styles.prise_sale : styles.prise_default
                  }
                >
                  {`$${elem.price}`}
                </p>
              </div>
            </div>
            
       
        );
      })}
    </div>
  );
}

export default AllSales;
