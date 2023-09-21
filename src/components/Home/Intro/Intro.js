import Cart from "../../UI/Cart/Cart";
import styles from "./Intro.module.css";

const Intro = () => {
    return (
      <Cart className={styles.intro}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredents, just-in-time
          and of course by experienced chefs
        </p>
      </Cart>
    );
};

export default Intro;