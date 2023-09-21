import styles from "./Menu.module.css";
import Item from "./Item/Item";
import Cart from "../../UI/Cart/Cart";

const MenuData = [
  {
    id: 0,
    title: "Couscous",
    description: "A morocco food",
    price: 15.49,
  },
  {
    id: 1,
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.5,
  },
  {
    id: 2,
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: 3,
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Menu = () => {
  return (
    <Cart className={styles["menu-container"]}>
      <ul className={styles.menu}>
        {MenuData.map((item) => {
          return (
            <li className={styles.item} key={item.id}>
              <Item
                title={item.title}
                description={item.description}
                price={item.price}
                id={item.id}
              ></Item>
            </li>
          );
        })}
      </ul>
    </Cart>
  );
};

export default Menu;
