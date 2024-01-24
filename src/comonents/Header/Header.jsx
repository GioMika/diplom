import logo from "../../assest/img/logo.svg";
import card from "../../assest/img/card.svg";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
function Header() {
  const sumCunt = useSelector((state) => state.cart);
  const [now,setNow] = useState(new Date())
  setInterval(() => setNow(new Date()))

  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/">
        {" "}
        <img className={styles.logo} src={logo} alt="logo" />
        <p className={styles.timer}>TIME: {now.toLocaleTimeString()}</p>

      </Link>
      <div className={styles.paragraph}>
        <Link className={styles.link} to="/">
          <p className={styles.paragraph}>Main Page</p>
        </Link>
        <Link className={styles.link} to="/categories">
          <p className={styles.paragraph}>Categories</p>
        </Link>
        <Link className={styles.link} to="/products">
          <p className={styles.paragraph}>All products</p>
        </Link>
        <Link className={styles.link} to="/sale">
          <p className={styles.paragraph}>All sales</p>
        </Link>
      </div>
      <Link to="/cart" className={styles.link}>
        <div>
          {sumCunt.length === 0 ? (
            <p style={{ display: "none" }} className={styles.countNone}></p>
          ) : (
            <p style={{ display: "block" }} className={styles.count}>
              {sumCunt.length}
            </p>
          )}
        </div>
        <img className={styles.logo} src={card} alt="card" />
      </Link>

    </header>
  );
}

export default Header;
