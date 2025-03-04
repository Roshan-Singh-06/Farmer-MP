import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "../styles/StartSelling.module.css";

const StartSelling = () => {
  const [step, setStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const isValidPhone = (input) => /^[6-9]\d{9}$/.test(input);
  const isValidEmail = (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  const isValidPassword = (input) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(input);

  const handleSendOTP = () => {
    if (isValidPhone(contact) || isValidEmail(contact)) {
      setOtpSent(true);
    } else {
      alert("❌ Please enter a valid phone number or email.");
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      setOtpVerified(true);
      setStep(2);
    } else {
      alert("❌ Invalid OTP. Please enter a 6-digit OTP.");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (!isValidPassword(newPassword)) {
      setPasswordError(
        "⚠️ Password must be at least 8 characters long, including uppercase, lowercase, a number, and a special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleNextStep = () => {
    if (!password || !confirmPassword) {
      alert("❌ Please create a password.");
      return;
    }
    if (!isValidPassword(password)) {
      alert("❌ Password is too weak! Use uppercase, lowercase, numbers, and special characters.");
      return;
    }
    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }
    setStep(3);
  };

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.stepIndicator}>
        <div className={`${styles.step} ${step >= 1 ? styles.active : ""}`}>Step 1: Verification</div>
        <div className={`${styles.step} ${step >= 2 ? styles.active : ""}`}>Step 2: Password</div>
        <div className={`${styles.step} ${step >= 3 ? styles.active : ""}`}>Step 3: Onboarding</div>
      </div>

      {step === 1 && (
        <div className={styles.stepBox}>
          <h2>Email & Phone Verification</h2>
          <input
            type="text"
            placeholder="Enter Phone Number or Email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
          {!otpSent ? (
            <button onClick={handleSendOTP} className={styles.otpButton}>
              Send OTP
            </button>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button onClick={handleVerifyOTP} className={styles.verifyButton}>
                Verify OTP
              </button>
            </>
          )}
        </div>
      )}

      {step === 2 && (
        <div className={styles.stepBox}>
          <h2>Create Password</h2>

          {/* Create Password Field with Eye Icon */}
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              value={password}
              onChange={handlePasswordChange}
              required
              className={styles.inputField}
            />
           <span onClick={() => setShowPassword(!showPassword)} className={styles.eyeIcon}>
  {showPassword ? <FaEye /> : <FaEyeSlash />}
</span>

          </div>

          {passwordError && <p className={styles.errorMessage}>{passwordError}</p>}

          {/* Confirm Password Field with Eye Icon */}
          <div className={styles.passwordContainer}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={styles.inputField}
            />
           <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className={styles.eyeIcon}>
  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
</span>

          </div>

          <button
            onClick={handleNextStep}
            className={styles.nextButton}
            disabled={!password || !confirmPassword || passwordError}
          >
            Create Password
          </button>
        </div>
      )}

      {step === 3 && (
        <div className={styles.stepBox}>
          <h2>Welcome to Your Seller Dashboard</h2>
          <p>Complete your profile and start selling your farm products.</p>
          <button onClick={handleGoToDashboard} className={styles.nextButton}>
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default StartSelling;
