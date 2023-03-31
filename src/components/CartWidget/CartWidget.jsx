import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "./CartWidget.module.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -10,
    top: -2,
    padding: "0 4px",
  },
}));

const CartWidget = () => {
  return (
    <div>
      <div className={`${styles.cartIcon} ${styles.cartContainer}`}>
        <StyledBadge badgeContent={200} color="primary">
          <BsCart3 className="faIcons" />
        </StyledBadge>
      </div>
    </div>
  );
};

export default CartWidget;
