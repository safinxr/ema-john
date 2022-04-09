import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const emailBlur = (event) => {
      setEmail(event.target.value)
  };
  const passwordBlur = (event) => {
      setPassword(event.target.value)
  };
  const confirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value)
  };
  const createUser=(event)=>{
    event.preventDefault();
    if(password !== confirmPassword){
        setError('your two password did not match')
        return;
    }
  }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Signup</h2>
        <form onSubmit={createUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={emailBlur} type="email" name="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={passwordBlur} type="password" name="" />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onBlur={confirmPasswordBlur}  type="password" name="" required />
          </div>
          <p style={{color:'red'}}>{error}</p>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
