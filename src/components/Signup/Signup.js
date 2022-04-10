import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Signup = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [allError, setAllError] = useState("");

  if (user) {
    navigate('/login')
  }
  const emailBlur = (event) => {
    setEmail(event.target.value);
  };
  const passwordBlur = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  const createUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setAllError("your two password did not match");
      return;
    }
    if (password.length < 6) {
      setAllError('Password mast be 6 characters longer')
      return;
    }
    createUserWithEmailAndPassword(email, password)

  };

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
            <input
              onBlur={confirmPasswordBlur}
              type="password"
              name=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{allError}</p>
          <p style={{ color: "red" }}>{error?.message}</p>
          <input className="form-submit" type="submit" value={loading ? 'loading...' : 'Signin'} />
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
