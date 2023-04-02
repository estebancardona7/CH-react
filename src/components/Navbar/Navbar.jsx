import { Grid, TextField } from "@mui/material";
import styles from "./Navbar.module.css";
import { Box } from "@mui/system";
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <nav className={styles.navbarContainer} md={4} xl={12}>
      <Grid container />
      <Grid item xs={12} sm={4} />
      <div className={styles.Navbar}>
        <div>
          <a href="/">
            <img
              className={styles.navBarLogo}
              src="https://i2.wp.com/www.thegraphicmac.com/wp-content/uploads/gen-samsung-logo-parody.jpg"
              // src="./logo192.png"
              alt="logo"
            />
          </a>
        </div>
        BlueTech
        <Grid />
        <ul className={styles.navLinksContainer}>
          <a href="/productos">
            <button className={styles.navbarButton}>Productos</button>
          </a>
          <a href="/about-us">
            <button className={styles.navbarButton}>Sobre nosotros</button>
          </a>
          <a href="/services">
            <button className={styles.navbarButton}>Servicios</button>
          </a>
          <a href="/contact">
            <button className={styles.navbarButton}>Contactanos!</button>
          </a>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              className="textField"
              sx={{ color: "white" }}
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
  );
};
