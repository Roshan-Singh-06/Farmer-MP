
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path ? styles.active : "";

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${isActive("/")}`} onClick={() => navigate("/")}>
            Home
          </li>
          <li className={`${styles.navItem} ${isActive("/profile")}`} onClick={() => navigate("/profile")}>
            Profile
          </li>
          <li className={`${styles.navItem} ${isActive("/about")}`} onClick={() => navigate("/about")}>
            About Us
          </li>
        </ul>
        <div className={styles.searchBar}>
          <input type="text" className={styles.searchInput} placeholder="Search for a product..." />
        </div>
      </nav>
    </header>
  );
};

export default Header;
