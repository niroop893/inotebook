import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({email: "", password: ""})
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API Call
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json();
    console.log(json);
    if (json.success){
      //save auth token and redirect
      localStorage.setItem('token', json.authToken);
      navigate('/')
      props.showAlert("Logged in Successfully", "success")
    }
    else {
      props.showAlert("Invalid Details", "danger")
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    setCredentials({...credentials, [e.target.name]: e.target.value})
};
  return (
    <div className="mt-3">
      <h2>Login to continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            id="email"
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
