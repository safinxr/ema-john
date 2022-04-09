import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="" required/>
          </div>
          <input className="form-submit" type="submit" value="Login" required/>
        </form>
        <p>New to ema jhon? <Link className="form-link" to='/signup'>Create an account</Link></p>
      </div>
    </div>
  );
};

export default Login;
