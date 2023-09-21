import { useContext } from "react";
import AuthContext from "../../Auth-Context/AuthContext";

import { MdOutlineLocalGroceryStore } from "react-icons/md";
import styles from "./Header.module.css";
import Button from "../../UI/Button/Button";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <header>
      <h1 className={styles.title}>Food Menu</h1>
      <Button onClick={ctx.showingCardHandle} className={styles["card-button"]}>
        <MdOutlineLocalGroceryStore className={styles.icon} />
        <span className={`${styles.counter} ${ctx.animatCounter && styles["animat-counter"]}`}>{ctx.cartData.length}</span>
      </Button>
    </header>
  );
};

export default Header;
