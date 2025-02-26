import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Farmers.module.css";

const farmersData = [
  { id: 1, name: "Rajesh Kumar", src: "/images/1.jpg" },
  { id: 2, name: "Suresh Patil", src: "/images/2.jpg" },
  { id: 3, name: "Amit Sharma", src: "/images/3.jpg" },
];

const Farmers = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Meet Our Farmers</h2>
      <div className={styles.farmerGrid}>
        {farmersData.map((farmer) => (
          <div key={farmer.id} className={styles.card} onClick={() => navigate(`/farmer/${farmer.id}`)}>
            <img src={farmer.src} alt={farmer.name} className={styles.image} /> {/* Fixed `farmer.image` to `farmer.src` */}
            <h3 className={styles.name}>{farmer.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Farmers;


