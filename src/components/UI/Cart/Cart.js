import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <section className={`${styles.cart} ${props.className ? props.className : ""}`}>
      {props.children}
    </section>
  );
};

export default Cart;
