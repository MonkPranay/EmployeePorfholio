import React, { useState } from "react";
import { signin, authenticate } from "../Auth";
import { Link, useHistory } from "react-router-dom";
import userImg from "../Base/images/user.webp";
import "../Base/css/main.css";

const Signin = () => {
  let history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
  });

  const { email, password, error} = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signin({ email, password }).then((data) => {
     
      if (data.error) {
        setValues({ ...values, error: data.error});
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            
          });
        });
        return history.push("/dashbord");
      }
    });
  };
  const errorMessage = () => (
    
    <div
      className="alert alert-danger successMessage"
      style={{ display: error ? " " : "none" }}
    >
      {error}
    </div>
  );

  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={userImg} alt="IMG" />
            </div>

            <form className="login100-form validate-form">
              <span className="login100-form-title">User Login</span>

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

              <div className="text-center pt-3 pb-5">
                <Link to="/signup">Create new Account</Link>
              </div>
            </form>
            {errorMessage()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
