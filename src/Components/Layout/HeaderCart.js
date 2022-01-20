import classes from "./HeaderCart.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";

const HeaderCart = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(CartContext);
  const cartCtx = useContext(CartContext);
  const numerOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
  }, [items]);

  return () => {
    clearTiemout(timer);
  };
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numerOfCartItems} </span>
    </button>
  );
};

export default HeaderCart;
