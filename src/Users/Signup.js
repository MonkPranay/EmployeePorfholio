import React, { useState } from "react";
import toastr from 'reactjs-toastr';
import { Link } from "react-router-dom";
import { signup } from "../Auth";
import joinusImg from "../Base/images/user.webp";
import "../Base/css/main.css";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
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
        if (data) {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        } else {
          setValues({ ...values, error: false, success: false });
        }
      })
      .catch(console.log("Error is signup"));
  };

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
            </div>
            
          </div>
        </div>
      </div>
    );
  };

  const successMessage = () => (    
    <div
      className="alert alert-success successMessage"
      style={{ display: success ? " " : "none" }}
    >
     <p onClick={()=>toastr.success('Success Message', 'Title', {displayDuration:3000})}>Show Success Message</p>
      <Link to="/">Login here</Link>
    </div>
  );

  return (
    <div>
      {signupForm()}      
      
    </div>
  );
};

export default Signup;
