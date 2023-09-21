import { Fragment, useContext } from "react";
import Button from "../../../UI/Button/Button";
import styles from "./Order.module.css";
import AuthContext from "../../../Auth-Context/AuthContext";

const Order = (props) => {
  const ctx = useContext(AuthContext);

  function decrease() {
    ctx.decrease(props.id, props.title, props.amount);
    if (ctx.cartData.length === 1 && props.amount === 1) {
      ctx.hiddingCardHandle();
    }
  }

  function increase() {
    ctx.increase(props.id, props.amount);
  }

  return (
    <Fragment>
      <div className={styles["content"]}>
        <h3>{props.title}</h3>
        <div className={styles.contain}>
          <span>${props.price}</span>
          <span>X {props.amount}</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button onClick={decrease} className={styles.button}>
          -
        </Button>
        <Button onClick={increase} className={styles.button}>
          +
        </Button>
      </div>
    </Fragment>
  );
};

export default Order;
