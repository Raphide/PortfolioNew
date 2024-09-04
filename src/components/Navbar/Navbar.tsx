import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.bar}>
        <NavLink to="/" className={styles.pages}>About</NavLink>
        <NavLink to="/projects" className={styles.pages}>Projects</NavLink>
        <NavLink to="/contact" className={styles.pages}>Contact</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
