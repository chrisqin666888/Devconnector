import React, { Fragment, useState } from "react";
import {Link} from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {email, password} = formData;

  const onChange = event =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = event => {
    console.log('success');
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={onChange}
          />
        </div>
        
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Login;
