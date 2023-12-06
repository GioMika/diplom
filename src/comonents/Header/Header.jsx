import logo from "../../assest/img/logo.svg"
import card from "../../assest/img/card.svg"
import styles from "./index.module.css"


function Header(){

  return (
   <header className={styles.header} >
    <img src={logo} alt="logo" />
    <div className={styles.paragraph}>
    <p >Main Page</p>
    <p>Categories</p>
    <p>All products</p>
    <p>All sales</p>
    </div>
    <img src={card} alt="card" />
   </header>

  )
}


export default Header;