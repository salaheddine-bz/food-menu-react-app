import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  cartData: [],
  addItemsToCardData: () => {},
  showCard: null,
  showingCardHandle: () => {},
  hiddingCardHandle: () => {},
  decrease: () => {},
  increase: () => {},
  animatCounter: null,
  animatingCounterHandle: () => {},
  totalPrice: null,
});

export const AuthProvider = (props) => {
  const [showCard, setShowCard] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [animatCounter, setAnimatCounter] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  function animatingCounterHandle(val) {
    setAnimatCounter(val);
  }

  function showingCardHandle() {
    if (cartData.length > 0) {
      setShowCard(true);
    }
  }

  function hiddingCardHandle() {
    setShowCard(false);
  }

  // This Function for add the new order item to the cartData array
  function addItemsToCardData(item) {
    // if the card is empty so we add the item without looking if the new item and a card item are duplicated
    if (cartData.length > 0) {
      for (let i = 0; i < cartData.length; i++) {
        const element = cartData[i];
        if (element.id == item.id) {
          element.amount += item.amount;
          setCartData([...cartData]);
          break;
        }
        if (i == cartData.length - 1) {
          setCartData([...cartData, item]);
        }
      }
    } else if (cartData.length === 0) {
      setCartData([...cartData, item]);
    }
  }

  function decrease(id, title, amount) {
    if (amount > 1) {
      const decreasedItem = {
        title: cartData[id].title,
        price: cartData[id].price,
        amount: cartData[id].amount - 1,
        id: cartData[id].id,
      };

      let copyData = cartData;
      copyData[id] = decreasedItem;

      setCartData([...copyData]);
    } else if (amount === 1) {
      const deleteItem = cartData.filter((element) => {
        return element.title !== title;
      });
      setCartData([...deleteItem]);
    }
  }

  function increase(id, amount) {
    if (amount < 15) {
      const increasedItem = {
        title: cartData[id].title,
        price: cartData[id].price,
        amount: cartData[id].amount + 1,
        id: cartData[id].id,
      };

      let copyData = cartData;
      copyData[id] = increasedItem;

      setCartData([...copyData]);
    }
  }

  useEffect(() => {
    let prc = 0;
    for (const price of cartData) {
      prc += +price.price * +price.amount;
    }
    setTotalPrice(prc.toFixed(2));
  }, [cartData]);

  return (
    <AuthContext.Provider
      value={{
        cartData: cartData,
        addItemsToCardData: addItemsToCardData,
        showCard: showCard,
        showingCardHandle: showingCardHandle,
        hiddingCardHandle: hiddingCardHandle,
        decrease: decrease,
        increase: increase,
        animatCounter: animatCounter,
        animatingCounterHandle: animatingCounterHandle,
        totalPrice: totalPrice,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
