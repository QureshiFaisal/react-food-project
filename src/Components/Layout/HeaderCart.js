import classes from "./HeaderCart.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext);
  const numerOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numerOfCartItems} </span>
    </button>
  );
};

export default HeaderCart;
