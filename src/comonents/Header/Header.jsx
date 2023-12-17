import logo from "../../assest/img/logo.svg"
import card from "../../assest/img/card.svg"
import styles from "./index.module.css"
import { Link } from "react-router-dom"

function Header() {

  return (
    <header className={styles.header} >
      <img src={logo} alt="logo" />
      <div className={styles.paragraph}>
        <Link to='/'><p >Main Page</p></Link>
        <Link to='/categories'><p>Categories</p></Link>
        <Link to='/products'><p>All products</p></Link>
        <Link to='/sale'><p>All sales</p></Link>

      </div>
      <img src={card} alt="card" />
    </header>

  )
}


export default Header;