import styles from "../styles/Footer.module.css"; // Ensure correct path
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}></div>
      <div className={styles.container}>
        <h2 className={styles.heading}>Connecting Farmers & Customers 🌱</h2>
        
        <p className={styles.text}>
          Empowering farmers with technology to sell their products directly to consumers. Fresh, organic, and locally sourced produce at your doorstep!
        </p>

        <div className={styles.links}>
          <a href="https://facebook.com" className={styles.icon} target="_blank">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" className={styles.icon} target="_blank">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" className={styles.icon} target="_blank">
            <FaTwitter />
          </a>
        </div>

        <div className={styles.contact}>
          <p><FaPhone className={styles.contactIcon} /> +91 98765 43210</p>
          <p><FaEnvelope className={styles.contactIcon} /> support@farmfresh.com</p>
        </div>

        <p className={styles.copy}>© 2025 FarmFresh. All rights reserved.</p>
      </div>
    </footer>
  );
}
