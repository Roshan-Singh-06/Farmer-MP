import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../styles/Navbar1.module.css";

const Navbar1 = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  // Function to check if the link is active
  const isActive = (path) => (location.pathname === path ? styles.active : "");

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${isActive("/")}`} onClick={() => navigate("/")}>
            Home
          </li>
          <li className={`${styles.navItem} ${isActive("/login")}`} onClick={() => navigate("/login")}>
            Login
          </li>
          <li className={`${styles.navItem} ${isActive("/Seller")}`} onClick={() => navigate("/Seller")}>
            Seller man
          </li>
        </ul>
        <div className={styles.searchBar}>
          <input type="text" className={styles.searchInput} placeholder="Search for a product..." />
        </div>
      </nav>
    </header>
  );
};

export default Navbar1;
