import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { addItemCart } from "../../store/allSlices/cartSlice";
import { useState } from "react";

function Products({ products }) {
  const dispatch = useDispatch();
  //   const [sort, setSort] = useState("");
  //   const [checkBox,setCheckBox] = useState(false)
  // const [minPrice,setMinPrice] = useState('')
  // const [maxPrice,setMaxPrice] = useState('')

  //   const newProducts = products
  //     ? [...products].sort((a, b) => {
  //         if (sort === "low-high") {
  //           return a.price - b.price;
  //         } else if (sort === "high-low") {
  //           return b.price - a.price;
  //         } else if (sort === "titleAsc") {
  //           return a.title.localeCompare(b.title);
  //         } else if (sort === "titleDesc") {
  //           return b.title.localeCompare(a.title);
  //         } else {
  //           return 0;
  //         }
  //       })
  //     : [];

  //     const filterIsDiscount = newProducts.filter((product) => {
  //       const hasDiscount = checkBox && product.discont_price !== null;

  //       return (
  //         (!checkBox || hasDiscount) &&
  //         (!minPrice  || product.price >= minPrice) &&
  //         (!maxPrice || product.price <= maxPrice)
  //       );
  //     });

  return (
    <>

      <section className={styles.sectionAllProduscts}>
        {products
          .filter((item) => item.showProduct && item.showProductFilter)
          .map((elem, id) => (
         
            <div
              className={styles.imgList}
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
          ))}
      </section>
    </>
  );
}

export default Products;
