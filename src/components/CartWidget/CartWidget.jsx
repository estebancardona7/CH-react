import React, { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "./CartWidget.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -10,
    top: -2,
    padding: "0 4px",
  },
}));

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <div className={styles.cartWidgetContainer}>
      <Link to="/cart" className={styles.cartContainer}>
        <div className={`${styles.cartIcon} ${styles.cartContainer}`}>
          <StyledBadge badgeContent={`${total}`} color="primary">
            <BsCart3 className="faIcons" />
          </StyledBadge>
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
