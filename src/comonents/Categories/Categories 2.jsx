import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getCategories from "../../request/asynckCategories";
import styles from "./categories.module.css";
import { Link } from "react-router-dom";

function Categories2({ show4 }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categoriesList);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const showCategories = show4 ? categories.slice(0, -1) : categories;

  return (
    <>
    <h1 className={styles.text_h1}>Categories</h1>
      <section className={styles.sectionBlock}>
        {showCategories.map((elem) => (
          <div
            className={styles.imgList}
            key={elem.id}
            style={{
              backgroundImage: `url(http://localhost:3333${elem.image})`,
              backgroundSize: "cover",
            }}
          >
            <Link className={styles.link} to={`/categories/${elem.id}`}>
              <p className={styles.textTitle}>{elem.title}</p>
            </Link>
          </div>
        ))}
      </section>
      </>

  );
}

export default Categories2;
