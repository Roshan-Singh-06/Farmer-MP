import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/FarmerDetails.module.css";

const farmersData = {
  1: { name: "Rajesh Kumar", src: "/images/4.jpg", details: "Expert in organic farming with 20+ years of experience." },
  2: { name: "Suresh Patil", src: "/images/2.jpg", details: "Growing sustainable crops and promoting eco-friendly agriculture." },
  3: { name: "Amit Sharma", src: "/images/3.jpg", details: "Specialist in dairy farming and natural fertilizers." }
};

// const FarmerDetails = () => {
//   const { id } = useParams();
//   const farmer = farmersData[Number(id)];

//   if (!farmer) {
//     return <h2 className={styles.error}>Farmer not found</h2>;
//   }

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>{farmer.name}</h2>
//       <img src={farmer.src} alt={farmer.name} className={styles.image} />
//       <p className={styles.details}>{farmer.details}</p>
//     </div>
//   );
// };

const FarmerDetails = () => {
  const { id } = useParams();
  const farmer = farmersData[Number(id)];

  if (!farmer) {
    return <h2 className={styles.error}>Farmer not found</h2>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{farmer.name}</h2>
      <img src={farmer.src} alt={farmer.name} className={styles.image} />
      <p className={styles.details}>{farmer.details}</p>
    </div>
  );
};

export default FarmerDetails;


