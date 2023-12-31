import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { addItemCart } from "../../store/allSlices/cartSlice";


function Products({ producsts }) {
  const dispatch = useDispatch()

  return (
    <section className={styles.sectionAllProduscts}>
      {producsts.map((elem, id) => (
        <div
          className={styles.imgList}
          key={id}
          style={{
            backgroundImage: `url(http://localhost:3333${elem.image})`,
            backgroundSize: "cover",
           
          }}>


          <button onClick={() => dispatch(addItemCart(elem))} className={styles.addProducts}>ADD TO CART</button>
          <p className={styles.textTitle}>{elem.title}</p>
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

          <p className={styles.doscount}> {elem.discont_price ? " -" + Math.floor((elem.price - elem.discont_price) / elem.price * 100) + ' % ' : null}</p>
        </div>
      ))}


    </section>
  );
}

export default Products;