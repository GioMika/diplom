import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { addItemCart } from "../../store/allSlices/cartSlice";
import { Link } from "react-router-dom";

function Products({ products }) {
  const dispatch = useDispatch();
  return (
    <section className={styles.sectionAllProduscts}>
      {products
        .filter((item) => item.showProduct && item.showProductFilter)
        .map((elem, id) => (
          <Link to={`/products/${elem.id}`}>
            <div className={styles.imgList}>
              <div
                className={styles.img}
                key={id}
                style={{
                  backgroundImage: `url(http://localhost:3333${elem.image})`,
                  backgroundSize: "cover",
                }}>
              
                   <button
                onClick={() => dispatch(addItemCart({ count: 1, ...elem }))}
                className={styles.addProducts}
              >
                ADD TO CART
              </button>
              </div>

           

              <p className={styles.textTitle}>{elem.title}</p>

              <div className={styles.price_discount}>
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

              <p className={styles.doscount}>
                {" "}
                {elem.discont_price
                  ? " -" +
                    Math.floor(
                      ((elem.price - elem.discont_price) / elem.price) * 100
                    ) +
                    " % "
                  : null}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}

export default Products;
