import React, { useContext, useRef } from "react";
import Button from "../../../UI/Button/Button";
import styles from "./Item.module.css";
import AuthContext from "../../../Auth-Context/AuthContext";

const Item = (props) => {
  const amountInput = useRef();
  const ctx = useContext(AuthContext);

  function submitForm(e) {
    e.preventDefault();

    ctx.addItemsToCardData({
      title: props.title,
      price: props.price,
      amount: +amountInput.current.value,
      id: props.id,
    });

    // this to animat the red counter on the header cart button
    ctx.animatingCounterHandle(true);
    setTimeout(() => {
      ctx.animatingCounterHandle(false);
    }, 400);
  }

  return (
    <React.Fragment>
      <div className={styles["left-content"]}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <span>${props.price}</span>
      </div>

      <form onSubmit={submitForm} className={styles["right-content"]}>
        <div className={styles.amount}>
          <label htmlFor={`i${props.id}`}>Amount</label>
          <input
            ref={amountInput}
            id={`i${props.id}`}
            type="number"
            defaultValue="1"
            min="1"
          />
        </div>
        <Button className={styles["add-btn"]}>+Add</Button>
      </form>
    </React.Fragment>
  );
};

export default Item;
