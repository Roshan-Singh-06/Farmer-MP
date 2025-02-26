
import React, { useState } from "react";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isSignUp ? "Sign Up" : "Login"} Data:`, formData);
  };

  return (
    <div className={styles.loginContainer}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <h2 className={styles.welcomeText}>Welcome to Farmer's Market</h2>
        <p>Join the revolution in agriculture & connect with customers directly.</p>
      </div>

      {/* Right Section - Form */}
      <div className={styles.rightSection}>
        <h2 className={styles.title}>{isSignUp ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          {isSignUp && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          )}
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
          <button type="submit" className={styles.submitButton}>
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Toggle between Login & Signup */}
        <p className={styles.toggleText}>
          {isSignUp ? "Already have an account?" : "New to Website?"}{" "}
          <span className={styles.toggleButton} onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Login" : "Create an Account"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

