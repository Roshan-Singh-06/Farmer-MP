import styles from "../styles/FarmerMarket.module.css";
import { FaUsers, FaShieldAlt, FaMoneyBillWave, FaHandsHelping } from "react-icons/fa";

export default function FarmerMarket() {
  return (
    <div className={styles.container}>
      {/* Typewriter Text */}
      <div className={styles.overlay}>
        <h1 className={styles.typewriter}>Sell Online with Farmer Market</h1>
      </div>

      {/* Cards Section */}
      <div className={styles.cardContainer}>
        {/* Card 1 - Customers */}
        <div className={styles.card}>
          <FaUsers className={styles.icon} />
          <p><strong>50+</strong> Customers</p>
        </div>

        {/* Card 2 - Secure Payments */}
        <div className={styles.card}>
          <FaShieldAlt className={styles.icon} />
          <p><strong>7 Days Secure</strong> & Regular Payments</p>
        </div>

        {/* Card 3 - Seller Support */}
        <div className={styles.card}>
          <FaHandsHelping className={styles.icon} />
          <p><strong>One Click</strong> Seller Support</p>
        </div>
      </div>
    </div>
  );
}
