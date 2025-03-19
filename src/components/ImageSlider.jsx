import React, { useState, useEffect } from 'react';
import styles from '../styles/ImageSlider.module.css';

const images = [
  { src: "f1.jpg", alt: "Farm View" },
  { src:  "f2.jpg", alt: "Farmer Working" },
  { src:"f3.jpg", alt: "Organic Crops" }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
           <button className={styles.prev} onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>&#10094;</button>
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} className={styles.image} />

      <button className={styles.next} onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>&#10095;</button>
    </div>
  );
};

export default ImageSlider;


