import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import styles from "../styles/FarmerRegistration.module.css";

const FarmerRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    farmName: "",
    farmingType: "",
    landSize: "",
    products: "",
    pricingModel: "",
    bankAccount: "",
    ifscCode: "",
    upiId: "",
    productImages: null,
    idProof: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Farmer Registration Data:", formData);
  };

  return (
    <div className={styles.container}>
      <h2>Farmer Registration</h2>
      <div className={styles.stepIndicator}>
        <div className={`${styles.step} ${step >= 1 ? styles.active : ""}`}>Personal Details</div>
        <div className={`${styles.step} ${step >= 2 ? styles.active : ""}`}>Farm & Business Details</div>
        <div className={`${styles.step} ${step >= 3 ? styles.active : ""}`}>Product Details</div>
        <div className={`${styles.step} ${step >= 4 ? styles.active : ""}`}>Payment Details</div>
        <div className={`${styles.step} ${step >= 5 ? styles.active : ""}`}>Additional Details</div>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {step === 1 && (
          <div>
            <h3>Personal Details</h3>
            <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address (Village, District, State)" onChange={handleChange} required />
          </div>
        )}
        
        {step === 2 && (
          <div>
            <h3>Farm & Business Details</h3>
            <input type="text" name="farmName" placeholder="Farm Name" onChange={handleChange} required />
            <select name="farmingType" onChange={handleChange} required>
              <option value="">Select Farming Type</option>
              <option value="organic">Organic</option>
              <option value="conventional">Conventional</option>
            </select>
            <input type="number" name="landSize" placeholder="Land Size (in acres)" onChange={handleChange} required />
          </div>
        )}

        {step === 3 && (
          <div>
            <h3>Product Details</h3>
            <input type="text" name="products" placeholder="Product Name (e.g. Rice, Chana)" onChange={handleChange} required />
            <div className={styles.aiInputContainer}>
              <input type="text" name="aiProductInsights" placeholder=" AI-based Product Insights" onChange={handleChange} />
              
            </div>
      
            <select name="pricingModel" onChange={handleChange} required>
              <option value="">Select Pricing Model</option>
              <option value="1kg">1kg</option>
              <option value="5kg">5kg</option>
              <option value="10kg">10kg</option>
              <option value="20kg">20kg</option>
              <option value="30kg">30kg</option>
              <option value="100kg">100kg</option>
            </select>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3>Payment Details</h3>
            <input type="text" name="bankAccount" placeholder="Bank Account Number" onChange={handleChange} required />
            <input type="text" name="ifscCode" placeholder="IFSC Code" onChange={handleChange} required />
            <input type="text" name="upiId" placeholder="UPI ID (Optional)" onChange={handleChange} />
          </div>
        )}

        {step === 5 && (
          <div>
            <h3>Additional Details</h3>
            <label>Upload Product Images:</label>
            <input type="file" name="productImages" accept="image/*" onChange={handleFileChange} required />
            <label>Upload ID Proof:</label>
            <input type="file" name="idProof" accept="image/*,application/pdf" onChange={handleFileChange} required />
          </div>
        )}

        <div className={styles.buttonContainer}>
          {step > 1 && <button type="button" onClick={handlePrev} className={styles.button1}>Previous</button>}
          {step < 5 && <button type="button" onClick={handleNext} className={styles.button2}>Next</button>}
          {step === 5 && <button type="submit" className={styles.Btn}>Register</button>}
        </div>
      </form>
    </div>
  );
};

export default FarmerRegistration;