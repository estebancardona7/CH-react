import React from "react";
// import "./Navbar.css";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.containerNavbar}>
      <button className={styles.navbarButton}>Productos</button>
      <button className={styles.navbarButton}>Servicios</button>
      <button className={styles.navbarButton}>Contacto</button>
      <button className={styles.navbarButton}>Sobre nosotros</button>
      <input type="text" placeholder="Buscar..." />
      <div className={styles.cartIcon}>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </nav>
  );
};
