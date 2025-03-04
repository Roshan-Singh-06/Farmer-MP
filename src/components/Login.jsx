
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [signupError, setSignupError] = useState({ phone: "", email: "" });
  const navigate = useNavigate();

  const isValidPhone = (input) => /^[6-9]\d{9}$/.test(input);
  const isValidEmail = (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

  const handleContactChange = (e) => {
    setContact(e.target.value);
    setError("");
  };

  const requestOtp = () => {
    if (isValidPhone(contact) || isValidEmail(contact)) {
      setOtpSent(true);
      setError("");
    } else {
      setError("Invalid Phone Number or Email");
    }
  };

  const verifyOtp = () => {
    if (otp.length === 6) {
      navigate("/"); // Redirecting to home page
    }
  };

  const handleSignUp = () => {
    let errors = {};
    if (!isValidPhone(phone)) errors.phone = "Invalid Phone Number";
    if (!isValidEmail(email)) errors.email = "Invalid Email Address";
    
    if (Object.keys(errors).length > 0) {
      setSignupError(errors);
    } else {
      alert("Successfully Signed Up!");
      navigate("/"); // Redirecting to home page
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <h2 className={styles.welcomeText}>Welcome to Farmer's Market</h2>
        <p className={styles.pText}>Join the revolution in agriculture & connect with customers directly.</p>
      </div>

      <div className={styles.rightSection}>
        <h2 className={styles.title}>{isSignUp ? "Sign Up" : "Login"}</h2>
        
        <div className={styles.form}>
          {isSignUp ? (
            <>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.inputField}
                required
              />
              {signupError.phone && <p className={styles.errorText}>{signupError.phone}</p>}
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.inputField}
                required
              />
              {signupError.email && <p className={styles.errorText}>{signupError.email}</p>}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
                required
              />
              <button onClick={handleSignUp} className={styles.submitButton}>Sign Up</button>
            </>
          ) : (
            <>
              {error && <p className={styles.errorText}>{error}</p>}
              <input
                type="text"
                placeholder="Enter Email or Phone Number"
                value={contact}
                onChange={handleContactChange}
                className={styles.inputField}
                required
              />
              {!otpSent ? (
                <button onClick={requestOtp} className={styles.submitButton}>Request OTP</button>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className={styles.inputField}
                    required
                  />
                  <button onClick={verifyOtp} className={styles.submitButton}>Verify OTP</button>
                </>
              )}
            </>
          )}
        </div>

        <p className={styles.toggleText}>
          {isSignUp ? "Already have an account?" : "New to Website?"} 
          <span className={styles.toggleButton} onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Login" : "Create an Account"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;