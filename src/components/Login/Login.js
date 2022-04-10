import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const navigate =useNavigate()
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  if(user){
    navigate('/shop')
  }

  const emailBlur = (event) => {
    setEmail(event.target.value);
  };
  const passwordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handllogn=(event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(email, password)
  }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handllogn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={emailBlur} type="email" name="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={passwordBlur} type="password" name="" required/>
          </div>
          <p style={{color:'red'}}>{error?.message}</p>
          <input className="form-submit" type="submit" value={loading? 'loading...' :'Login'}/>
        </form>
        <p>New to ema jhon? <Link className="form-link" to='/signup'>Create an account</Link></p>
      </div>
    </div>
  );
};

export default Login;
