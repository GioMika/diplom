import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./style.module.css";
import { discountProducts } from "../../../store/allSlices/allProductsSlice";

function SaleForm() {
  const dispatch = useDispatch();

  const [checkBox, setCheckBox] = useState(false);
  const changeState = () => {
    setCheckBox(!checkBox);
  };

  return (
    <div className={style.checkBox}>
      <h5 className={style.text}>Discounted items</h5>
      <input
      className={style.check}
        onChange={changeState}
        onClick={(e) => dispatch(discountProducts(e.target.checked))}
        checked={checkBox}
        type="checkbox"
      />
    </div>
  );
}

export default SaleForm;
