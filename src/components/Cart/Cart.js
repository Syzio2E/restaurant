import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const CartItemRemoveHandler = (id) => {};
  const CartItemAddHAndler = (item) => {
    cartctx.addItem({...item,amount: 1})
  };
  const cartctx = useContext(CartContext);
  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;
  const hasItems = cartctx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={CartItemRemoveHandler.bind(null,item.id)}
          onAdd={CartItemAddHAndler.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
