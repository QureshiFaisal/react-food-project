import classes from "./Header.module.css";
import { Fragment } from "react";
import HeaderCart from "./HeaderCart";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div>React food app</div>
        <HeaderCart onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food items"></img>
      </div>
    </Fragment>
  );
};
export default Header;
