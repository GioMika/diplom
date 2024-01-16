import logo from "../../assest/img/logo.svg"
import card from "../../assest/img/card.svg"
import styles from "./index.module.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Header() {

const sumCunt = useSelector((state) => state.cart)


  return (
    <header className={styles.header} >
      <Link className={styles.link} to='/'> <img src={logo} alt="logo" /></Link>
      <div className={styles.paragraph}>
        <Link className={styles.link} to='/'><p >Main Page</p></Link>
        <Link className={styles.link} to='/categories'><p>Categories</p></Link>
        <Link className={styles.link} to='/products'><p>All products</p></Link>
        <Link className={styles.link} to='/sale'><p>All sales</p></Link>
      </div>

      <Link to='/cart' className={styles.link}>
      <div>
      
      {sumCunt.length === 0 ?
       <p style={{ display: 'none' }} className={styles.countNone}></p> 
      : 
      <p style={{ display: 'block' }} className={styles.count}>{sumCunt.length}</p>}
      </div>
      <img src={card} alt="card" />
      </Link> 
    </header>
  )
}


export default Header;