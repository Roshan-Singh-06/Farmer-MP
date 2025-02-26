import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Categories.module.css";

const categories = [
  { id: "organic-food", name: "Organic Food", src: "/images/1.jpg" },
  { id: "best-offer", name: "Best Offer", src: "/images/2.jpg" },
  { id: "nutrients", name: "Nutrients", src: "/images/4.jpg" },

  { id: "pulses", name: "Pulses", src: "/images/1.jpg" },
  { id: "wheat", name: "Wheat", src: "/images/2.jpg" },
  { id: "rice", name: "Rice", src: "/images/3.jpg" }
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Explore Categories</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.id} className={styles.card} onClick={() => handleCategoryClick(category.id)}>
            <img src={category.src} alt={category.name} className={styles.image} />
            <h3 className={styles.name}>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

