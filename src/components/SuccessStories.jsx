
import { useState, useEffect } from "react";
import styles from "../styles/SuccessStories.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const farmers = [
  { 
    name: "Ramesh Patil", 
    description: "A hardworking farmer from Maharashtra growing organic vegetables. His dedication to sustainable farming has helped his community access fresh, chemical-free produce.", 
    image: "/images/1.jpg" 
  },
  { 
    name: "Suresh Yadav", 
    description: "A progressive farmer using smart irrigation techniques. By implementing AI-driven water management, he has increased crop yield by 30%.", 
    image: "/images/2.jpg" 
  },
  { 
    name: "Meera Devi", 
    description: "An inspiring woman farmer excelling in dairy farming. Her farm produces high-quality organic milk, and she also empowers local women by offering training programs.", 
    image: "/images/3.jpg" 
  }
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? farmers.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === farmers.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Seller Success Stories</h2>
      
      <div className={styles.slider}>
        <img src={farmers[currentIndex].image} alt="Farmer" className={styles.image} />
        <div className={styles.textContent}>
          <h3 className={styles.farmerName}>{farmers[currentIndex].name}</h3>
          <p className={styles.farmerDescription}>{farmers[currentIndex].description}</p>
        </div>
      </div>

      <div className={styles.controls}>
        <FaArrowLeft className={styles.icon} onClick={prevSlide} />
        <span className={styles.counter}>{currentIndex + 1} / {farmers.length}</span>
        <FaArrowRight className={styles.icon} onClick={nextSlide} />
      </div>

      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${((currentIndex + 1) / farmers.length) * 100}%` }}></div>
      </div>
    </div>
  );
}
