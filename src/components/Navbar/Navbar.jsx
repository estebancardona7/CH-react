import { Grid } from "@mui/material";
import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbarContainer}>
        <Grid container />
        <Grid item xs={12} sm={4} />
        <div className={styles.Navbar}>
          <div>
            <Link to="/" className={styles.navbarButtonContainer}>
              <img
                className={styles.navBarLogo}
                src="https://i2.wp.com/www.thegraphicmac.com/wp-content/uploads/gen-samsung-logo-parody.jpg"
                alt="logo"
              />
            </Link>
          </div>
          BlueTech
          <Grid />
          <div className={styles.navLinksContainer}>
            <Link to="/" className={styles.navbarButtonContainer}>
              <button className={styles.navbarButton}>Todos</button>
            </Link>

            <Link to="category/apple" className={styles.navbarButtonContainer}>
              <button className={styles.navbarButton}>Apple</button>
            </Link>

            <Link
              to="category/samsung"
              className={styles.navbarButtonContainer}
            >
              <button className={styles.navbarButton}>Samsung</button>
            </Link>

            <Link
              to="category/oneplus"
              className={styles.navbarButtonContainer}
            >
              <button className={styles.navbarButton}>OnePlus</button>
            </Link>

            <Link to="category/xiaomi" className={styles.navbarButtonContainer}>
              <button className={styles.navbarButton}>Xiaomi</button>
            </Link>
          </div>
          <CartWidget />
        </div>
        <Grid />
      </nav>
      <Outlet />
    </div>
  );
};
