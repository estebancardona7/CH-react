import { Grid, TextField } from "@mui/material";
import styles from "./Navbar.module.css";
import { Box } from "@mui/system";
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
            <Link to="/">
              <img
                className={styles.navBarLogo}
                src="https://i2.wp.com/www.thegraphicmac.com/wp-content/uploads/gen-samsung-logo-parody.jpg"
                alt="logo"
              />
            </Link>
          </div>
          BlueTech
          <Grid />
          <ul className={styles.navLinksContainer}>
            <Link to="/">
              <button className={styles.navbarButton}>Todos</button>
            </Link>
            <Link to="category/apple">
              <button className={styles.navbarButton}>Apple</button>
            </Link>
            <Link to="category/samsung">
              <button className={styles.navbarButton}>Samsung</button>
            </Link>
            <Link to="category/oneplus">
              <button className={styles.navbarButton}>OnePlus</button>
            </Link>
            <Link to="category/xiaomi">
              <button className={styles.navbarButton}>Xiaomi</button>
            </Link>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
                width: "100%",
                maxWidth: "200px",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={styles.textField}
                sx={{ color: "white", width: "100%" }}
                id="outlined-basic"
                label="Buscar"
                variant="outlined"
              />
            </Box>
          </ul>
          <CartWidget />
        </div>
        <Grid />
      </nav>
      <Outlet />
    </div>
  );
};
