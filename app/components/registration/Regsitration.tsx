"use client";
import "./registration.css";

import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Regsitration = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`container ${isSignUp ? "active" : ""}`}>
      <div className="form-container sign-up">
        <SignUp toggleForm={toggleForm} />
      </div>
      <div className="form-container sign-in">
        <Login toggleForm={toggleForm} />
      </div>
      <div className="toggle-container">
        <Toggle />
      </div>
    </div>
  );
};

const Login = ({ toggleForm }) => {
  return (
    <form>
      <h1>Sign In</h1>
      <div className="social-icons">
        <a href="#" className="icon">
          <FaGoogle />
        </a>
        <a href="#" className="icon">
          <FaFacebookF />
        </a>
        <a href="#" className="icon">
          <FaGithub />
        </a>
        <a href="#" className="icon">
          <FaLinkedinIn />
        </a>
      </div>
      <span>or use your email password</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Log In</button>
      <a>
        Don't Have an Account?{" "}
        <b className="toggle-text" onClick={toggleForm}>
          Sign Up
        </b>
      </a>
    </form>
  );
};

const SignUp = ({ toggleForm }) => {
  return (
    <form>
      <h1>Create Account</h1>
      <div className="social-icons">
        <a href="#" className="icon">
          <FaGoogle />
        </a>
        <a href="#" className="icon">
          <FaFacebookF />
        </a>
        <a href="#" className="icon">
          <FaGithub />
        </a>
        <a href="#" className="icon">
          <FaLinkedinIn />
        </a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
      <a>
        Already Have an Account?{" "}
        <b className="toggle-text" onClick={toggleForm}>
          Log In
        </b>
      </a>
    </form>
  );
};

const Toggle = () => {
  return (
    <div className="toggle">
      <div className="toggle-panel toggle-left">
        <h1>Hello, Friend!</h1>
        <p>Register with your personal details to use all of site features</p>
      </div>
      <div className="toggle-panel toggle-right">
        <h1>Welcome Back!</h1>
        <p>Enter your personal details to use all of site features</p>
      </div>
    </div>
  );
};

export default Regsitration;
