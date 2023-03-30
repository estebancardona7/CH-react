import React from "react";
import { BsCart3 } from "react-icons/bs";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <div>
      <div className={`${styles.cartIcon} ${styles.cartContainer}`}>
        <i className="fas fa-shopping-cart"></i>
        <BsCart3 className="faIcons" />
        <span className={styles.counter}>0</span>
      </div>
    </div>
  );
};

export default CartWidget;
