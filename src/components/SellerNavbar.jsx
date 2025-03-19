import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SellerNavbar.module.css";

const SellerNavbar = () => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(null);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li 
            className={styles.navItem} 
            onMouseEnter={() => setDropdown("sell")} 
            onMouseLeave={() => setDropdown(null)}
          >
            Sell Online ▼
            {dropdown === "sell" && (
              <div className={styles.dropdown}>
                
                <p onClick={() => navigate("/sell/addpic")}>Add Pic</p>
                <p onClick={() => navigate("/sell/other")}>Other Details</p>
              </div>
            )}
          </li>

          <li 
            className={styles.navItem} 
            onMouseEnter={() => setDropdown("fee")} 
            onMouseLeave={() => setDropdown(null)}
          >
            Fee & Commission ▼
            {dropdown === "fee" && (
              <div className={styles.dropdown}>
                <p onClick={() => navigate("/fee/payment-cycle")}>Payment Cycle</p>
                <p onClick={() => navigate("/fee/types")}>Fee Types</p>
              </div>
            )}
          </li>

          <li 
            className={styles.navItem} 
            onMouseEnter={() => setDropdown("learn")} 
            onMouseLeave={() => setDropdown(null)}
          >
            Learn ▼
            {dropdown === "learn" && (
              <div className={styles.dropdown}>
                <p onClick={() => navigate("/learn/guides")}>Guides</p>
                <p onClick={() => navigate("/learn/videos")}>Videos</p>
                
              </div>
            )}
          </li>

          <li className={styles.navItem} onClick={() => navigate("/start-selling")}>
            Start Selling
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SellerNavbar;
