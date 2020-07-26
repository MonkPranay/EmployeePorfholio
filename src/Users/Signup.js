import React, { useState } from "react";
import { signup } from "../Auth";
import { Link} from "react-router-dom";
import joinusImg from "../Base/images/user.webp";
import "../Base/css/main.css";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    success: false,
    error:""
  });

  // Destructuring from values from state
  const { email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error is signup"));
  };
  
  const successMessage = () => (    
    <div
      className="alert alert-success successMessage"
      style={{ display: success ? " " : "none" }}
    >
      Registration Successfull <Link to="/">Click here to Login</Link>
    </div>
  );
  const errorMessage = () => (
    
    <div
      className="alert alert-danger successMessage"
      style={{ display: error ? " " : "none" }}
    >
      {error}
    </div>
  );

  const signupForm = () => {
    return (
      <div>
        <div className="limiter">
          <div></div>

          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic js-tilt" data-tilt>
                <img src={joinusImg} alt="IMG" />
              </div>

              <form className="login100-form validate-form">
                <span className="login100-form-title">Registration Form</span>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    className="input100"
                    type="text"
                    placeholder="Email Id"
                    autocomplete="off"
                    value={email}
                    onChange={handleChange("email")}
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input
                    className="input100"
                    type="password"
                    placeholder="Password"
                    autocomplete="off"
                    values={password}
                    onChange={handleChange("password")}
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>

                <button className="login100-form-btn" onClick={handelSubmit}>
                  Login
                </button>
                <div>
                  
                </div>
              </form>
              {successMessage()}
              {errorMessage()}
            </div>
            
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {signupForm()}      
      
    </div>
  );
};

export default Signup;
