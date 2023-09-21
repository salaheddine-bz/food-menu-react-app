import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom"
import AuthContext from "../../Auth-Context/AuthContext";

import Button from "../../UI/Button/Button";
import Cart from "../../UI/Cart/Cart";
import Order from "./Order/Order";

import styles from "./Card.module.css";

const Overlay = (props) => {
  return <div className={styles.overlay}>{props.children}</div>;
};

const Card = () => {
  const ctx = useContext(AuthContext);
  return (
    <Overlay>
      <Cart className={styles.card}>
        <ul className={styles.orders}>
          {ctx.cartData.length > 0 &&
            ctx.cartData.map((item, id) => {
              return (
                <li className={styles.order} key={item.id}>
                  <Order
                    id={id}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                  ></Order>
                </li>
              );
            })}
        </ul>

        <div className={styles.total}>
          <h3>Total Price :</h3>
          <span>${ctx.totalPrice}</span>
        </div>

        <div className={styles.buttons}>
          <Button
            onClick={ctx.hiddingCardHandle}
            className={styles["close-btn"]}
          >
            close
          </Button>
          <Button className={styles["order-btn"]}>order</Button>
        </div>
      </Cart>
    </Overlay>
  );
};

const PortalCard = () => {
  const ctx = useContext(AuthContext);
  return (
    <Fragment>
      {ctx.showCard && ctx.cartData.length > 0 && ReactDOM.createPortal(<Card/>,document.getElementById("overlay"))}
    </Fragment>
  );
};

export default PortalCard;
