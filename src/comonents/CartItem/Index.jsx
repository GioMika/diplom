import styles from "./styles.module.css"
import { countPlus,countMinus ,deleteItem} from "../../store/allSlices/cartSlice";
import { useDispatch } from "react-redux";



function CartItem(
  {title,id,price,discount_price,count}
  ) {

const dispatch  = useDispatch()

let  sumCount = count * price
    
  return (
    <div>
      <p>{count}</p>
      <p>{title}</p>
    <h2>{sumCount}</h2>
    <button onClick={() =>dispatch(countPlus(id))}  className={styles.btn}>+</button>
    <button onClick={() => dispatch(countMinus(id))} className={styles.btn}> - </button>
    <h4 style={{cursor: 'pointer'}} onClick={() => dispatch(deleteItem(id))}>X</h4>
    </div>
  )
}

export default CartItem;