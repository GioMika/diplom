import { useForm } from "react-hook-form";
import flowers from "./assest/flowers.svg";
import styles from "./inputDiscount.module.css";

function InputDiscount() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const getData = (data) => {
    console.log(data);
    reset();
  };

  console.log(errors);

  return (
    <section className={styles.section}>
      <h2 className={styles.text_h2}>5% off on the first order</h2>
      <div className={styles.all_elements}>
        <img className={styles.image} src={flowers} alt="flowers" />

        <form onSubmit={handleSubmit(getData)} className={styles.all_inputs}>
          <input
            {...register("name", {
              required: "fill in the name field",
              maxLength: {
                value: 20,
                message: 'Max symbol 20 ',
              },
              minLength: {
                minLength:2,
                message: 'Min symbol 20',
              }
            })}
            placeholder="Name"
            className={styles.input}
            type="text"
          />
          {errors.name && (
            <p style={{ color: "rgb(229, 241, 4)", fontSize: "26px" }}>
              {errors.name.message}
            </p>
          )}

          <input
            {...register("numberPhone", {
              required: "fill in the phone number field",
              maxLength: {
                value:20,
                message: 'Max symbol 20 '
              },
              minLength: {
                minLength:2,
                message: 'Min symbol 20'
              }

            })}
            // placeholder="Phone number"
            className={styles.input}
            type="text"
          />
          {errors.numberPhone && (
            <p style={{ color: "rgb(229, 241, 4)", fontSize: "26px" }}>
              {errors.numberPhone.message}
            </p>
          )}

          <input
            {...register("email", {
              required: "fill in the email field",
            })}
            placeholder="Email"
            className={styles.input}
            type="text"
          />
          {errors.email && (
            <p style={{ color: "rgb(229, 241, 4)", fontSize: "26px" }}>
              {errors.email.message}
            </p>
          )}

          <input
            type="submit"
            className={styles.submit}
            value={"Get a discount"}
          />
        </form>
      </div>
    </section>
  );
}

export default InputDiscount;
