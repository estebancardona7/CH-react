import { Grid, TextField } from "@mui/material";
import styles from "./Navbar.module.css";
import { Box } from "@mui/system";
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <Grid container />
      <Grid item xs={12} sm={4} />
      <div className={styles.Navbar}>
        <div>
          <a href="/">
            <img
              className={styles.navBarLogo}
              src="https://i2.wp.com/www.thegraphicmac.com/wp-content/uploads/gen-samsung-logo-parody.jpg"
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
            <button className={styles.navbarButton}>Nosotros</button>
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
  );
};
