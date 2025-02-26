import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/CategoriesDetails.module.css"; // Ensure this CSS file exists

const categoryItems = {
  "organic-food": [
    { name: "Organic Tomatoes", src: "/images/3.jpg" },
    { name: "Organic Carrots", src: "/images/2.jpg" }
  ],
  "best-offer": [
    { name: "50% Off Wheat", src: "/images/4.jpg" },
    { name: "Buy 1 Get 1 Rice", src: "/images/3.jpg" }
  ],
  "nutrients": [
    { name: "Vitamin Supplements", src: "/images/5.jpg" },
    { name: "Protein Powder", src: "/images/6.jpg" }
  ],
  "new-arrivals": [
    { name: "Fresh Apples", src: "/images/3.jpg" },
    { name: "Organic Spinach", src: "/images/4.jpg" }
  ],
  "insecticide": [
    { name: "Pesticide A", src: "/images/1.jpg" },
    { name: "Organic Insect Repellent", src: "/images/2.jpg" }
  ],
  "pulses": [
    { name: "Lentils", src: "/images/3.jpg" },
    { name: "Chickpeas", src: "/images/4.jpg" }
  ],
  "wheat": [
    { name: "Whole Wheat", src: "/images/3.jpg" },
    { name: "Refined Wheat", src: "/images/4.jpg" }
  ],
  "rice": [
    { name: "Basmati Rice", src: "/images/2.jpg" },
    { name: "Brown Rice", src: "/images/1.jpg" }
  ]
};

const CategoryDetails = () => {
  const { categoryId } = useParams();
  const items = categoryItems[categoryId];

  if (!items) {
    return <h2 className={styles.error}>No items found in this category</h2>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{categoryId.replace("-", " ").toUpperCase()}</h2>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.src} alt={item.name} className={styles.image} />
            <h3 className={styles.name}>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;

