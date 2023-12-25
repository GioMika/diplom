import { useSelector } from "react-redux";
import CartItem from "../CartItem/Index";
import styles from "./styles.module.css"


function Cart() {
  const certState = useSelector((state) => state.cart.list)


  return (

      
    <div className={styles.elements}>
 
      {certState?.map((elem) =>  <CartItem key={elem.id} {...elem}  /> ) }
     
    </div>
 

  )
}

export default Cart;