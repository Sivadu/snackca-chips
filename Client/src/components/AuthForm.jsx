import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, provider } from "../firebase";

import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import google_icon from "../assets/google.png";
import "../index.css";

const AuthForm = () => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      if (action === "Sign Up") {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log("✅ Signed up:", result.user);
        alert("Signup successful!");
      } else {
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log("✅ Logged in:", result.user);
        alert("Login successful!");
      }
      navigate("/");
    } catch (error) {
      console.error("❌ Auth error:", error);
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { uid, displayName, email, photoURL } = result.user;

      // Send user info to backend
      await axios.post("http://localhost:5000/api/auth/register", {
        uid,
        name: displayName,
        email,
        photoURL,
      });

      alert(`Welcome ${displayName}`);
      navigate("/");
    } catch (error) {
      console.error("❌ Google login or backend register failed:", error.message);
      alert("Google Sign-in failed: " + error.message);
    }
  };

  const handlePasswordReset = async () => {
    if (!resetEmail) {
      alert("Please enter your email.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      alert("✅ Password reset email sent!");
      setShowResetModal(false);
    } catch (error) {
      alert("❌ Failed to send reset email: " + error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Sign Up" && (
            <div className="input">
              <img src={user_icon} alt="user" />
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="email" />
            <input
              type="email"
              placeholder="Enter E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setResetEmail(e.target.value);
              }}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="password" />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {action === "Login" && (
          <div className="forgot-password">
            Lost Password?{" "}
            <span style={{ cursor: "pointer", color: "blue" }} onClick={() => setShowResetModal(true)}>
              Click Here!
            </span>
          </div>
        )}

        <div className="submit-container">
          <button className="submit" onClick={handleAuth}>
            {action}
          </button>
        </div>

        <div className="toggle-auth">
          {action === "Login" ? (
            <p>
              Don't have an account?{" "}
              <span style={{ cursor: "pointer" }} onClick={() => setAction("Sign Up")}>
                Sign Up
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span style={{ cursor: "pointer" }} onClick={() => setAction("Login")}>
                Login
              </span>
            </p>
          )}
        </div>

        <div className="google-login" onClick={handleGoogleLogin}>
          <img src={google_icon} alt="google" className="google-icon" />
          <span>Sign in with Google</span>
        </div>
      </div>

      {/* Password Reset Modal */}
      {showResetModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Reset Password</h3>
            <input
              type="email"
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handlePasswordReset}>Send Reset Link</button>
              <button onClick={() => setShowResetModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
