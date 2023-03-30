import { TextField } from "@mui/material";
import styles from "./Navbar.module.css";
import { Box } from "@mui/system";
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.Navbar}>
        <img
          className={styles.navBarLogo}
          // src="https://i2.wp.com/www.thegraphicmac.com/wp-content/uploads/gen-samsung-logo-parody.jpg"
          src="./logo192.png"
          alt="logo"
        />

        <ul className={styles.navLinksContainer}>
          <button className={styles.navbarButton}>Productos</button>
          <button className={styles.navbarButton}>Servicios</button>
          <button className={styles.navbarButton}>Contacto</button>
          <button className={styles.navbarButton}>Sobre nosotros</button>

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
    </nav>
  );
};
