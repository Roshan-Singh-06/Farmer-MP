import styles from "../styles/SellerPage.module.css"; // Ensure the path is correct
import { FaRobot } from "react-icons/fa";

export default function SellerPage() {
  return (
    <div className={styles.container}>
      {/* AI ChartBox */}
      <div className={styles.chartBoxCard}>
        <div className={styles.outerText}>
          Hey, I am your friend! I am ready to help you. So, say what is the problem?
        </div>
        <div className={styles.chartBox}>
          <FaRobot className={styles.icon} />
          <p>AI ChartBox: Ready to Assist!</p>
        </div>
      </div>
      
      {/* Video Container */}
      <div className={styles.videoContainer}>
        <h2>Watch This Video</h2>
        <video controls className={styles.videoPlayer}>
          <source src="/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}






