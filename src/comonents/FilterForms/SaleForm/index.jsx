
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import style from './style.module.css'
import { discountProducts } from '../../../store/allSlices/allProductsSlice';

function SaleForm() {
  const dispatch = useDispatch();

  const [checkBox,setCheckBox] = useState(false)
const changeState = () => {
  setCheckBox(!checkBox)
}

  return (
  <>
   <h5>Discounted items</h5>
      <input  onChange={changeState}
       onClick={(e) =>  dispatch(discountProducts(e.target.checked))} checked={checkBox} type="checkbox" />
  </>
  )
}

export default SaleForm;