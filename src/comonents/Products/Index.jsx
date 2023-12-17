
import styles from "./styles.module.css";

function Products({producsts}) {

  return (
    <section className={styles.sectionAllProduscts}>
      {producsts.map((elem, id) => (
        <div
          className={styles.imgList}
          key={id}
          style={{
            backgroundImage: `url(http://localhost:3333${elem.image})`,
            backgroundSize: "cover",
          }}
        >
          <button className={styles.addProducts}>ADD TO CART</button>
          <p className={styles.textTitle}>{elem.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Products;
