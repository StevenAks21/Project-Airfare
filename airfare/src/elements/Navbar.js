import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Navbar.module.css"; // Importing CSS module

function Navbar() {
  return (
    <div className={style.navbarContainer}>
      <nav className={style.navbar}>
        <ul className={style.navbarMenu}>
          <li className={style.navbarItem}>
            <Link to="/" className={style.navbarLink}>Home</Link>
          </li>
          <li className={style.navbarItem}>
            <Link to="/About" className={style.navbarLink}>About</Link>
          </li>
          <li className={style.navbarItem}>
            <Link to="/Search" className={style.navbarLink}>Search</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
