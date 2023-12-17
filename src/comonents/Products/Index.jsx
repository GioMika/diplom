
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { addItemCart } from "../../store/allSlices/cartSlice";


function Products({producsts}) {

const dispatch = useDispatch()
console.log(producsts);


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
          <p>{elem.price}</p>

          <p> {elem.discont_price ?  "procent  : " + Math.floor((elem.price - elem.discont_price) / elem.price * 100) : null}</p>

        </div>
      ))}
    </section>
  );
}

export default Products;
