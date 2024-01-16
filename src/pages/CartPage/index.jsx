import Cart from "../../comonents/Cart/Index";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import {
  nameValidation,
  emailValidation,
  phoneValidation,
} from "../../utils/validation";
import ValidationError from "../../comonents/Error";
import { useSelector,useDispatch  } from "react-redux";
import {orderPost }from "../../store/allSlices/orderPost";


function CartPage() {



const dispatch = useDispatch()
  const getDataFromInputs = (data) => {
    reset();
    dispatch(orderPost(data));
   
       
}

  


  
  const sumCunt = useSelector((state) => state.cart);

  const sum = sumCunt.reduce((acum, elem) => {
    const res =
      elem.discont_price !== null
        ? (acum += elem.discont_price && elem.discont_price * elem.count)
        : (acum += elem.price && elem.price * elem.count);
    return res  ;
  }, 0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const getData = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.carItem}>
      <div className={styles.cart}>
        <Cart />
      </div>

      <div className={styles.formt_elemens}>
        <p className={styles.paragraph}>Order details</p>

        <div className={styles.counter}>
          <p className={styles.items}>item</p>
          {sumCunt.length === 0 ? (
            <p style={{ display: "none" }} className={styles.countNone}></p>
          ) : (
            <p style={{ display: "block" }} className={styles.count}>
              {sumCunt.length}
            </p>
          )}
        </div>

        <div className={styles.total}>
          <p className={styles.items}>total</p>
          <p className={styles.sumPrice}>
            {sum === 0 ? '' : sum}
            </p>
        </div>

        <form onSubmit={handleSubmit(getDataFromInputs)} className={styles.all_inputs}>
          <input
            {...register("name", nameValidation)}
            placeholder="Name"
            className={styles.input}
            type="text"
          />
          <ValidationError
            keyName={errors.name}
            message={errors?.name?.message}
          />

          <input
            {...register("numberPhone", phoneValidation)}
            placeholder="Phone number"
            className={styles.input}
            type="number"
          />
          <ValidationError
            keyName={errors.numberPhone}
            message={errors?.numberPhone?.message}
          />
          <input
            {...register("email", emailValidation)}
            placeholder="Email"
            className={styles.input}
            type="text"
          />
          <ValidationError
            keyName={errors.email}
            message={errors?.email?.message}
          />

          <input
            type="submit"
            className={styles.submit}
            id="s"
            value={"Order"}
          />
        </form>
      </div>
    </div>
  );
}

export default CartPage;
