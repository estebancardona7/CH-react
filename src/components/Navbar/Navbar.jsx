import { TextField } from "@mui/material";
import { BsCart3 } from "react-icons/bs";
import styles from "./Navbar.module.css";
import { Box } from "@mui/system";

export const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.Navbar}>
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
              sx={{ color: "white", bgcolor: "grey" }}
              id="outlined-basic"
              label="Buscar"
              variant="outlined"
            />
          </Box>
        </ul>
        <div className={`${styles.cartIcon} ${styles.cartContainer}`}>
          <i className="fas fa-shopping-cart"></i>
          <BsCart3 className="faIcons" />
        </div>
      </div>
    </nav>
  );
};
