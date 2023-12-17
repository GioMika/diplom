import { useSelector } from "react-redux";

import CartItem from "../CartItem/Index";


function Cart() {
  const certState = useSelector((state) => state.cart.list)
console.log('cart' ,certState);

  return (
    <div>
      {certState?.map((elem) => <CartItem key={elem.id} {...elem} />)}
      
    </div>
  )
}

export default Cart;