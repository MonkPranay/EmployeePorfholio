import React from "react";
import { Link, useHistory } from "react-router-dom";

const Header=()=> {
  return (
    <header className="header_area">
      <div className="sub_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-4 col-xl-6">
              <div className="main_menu">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <nav className="navbar navbar-expand-lg navbar-light">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="navbarSupportedContent"
                        >
                          <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                              <Link className="nav-link" to="index.html">
                                <i className="fa fa-dashboard"></i>Dashboard
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="about.html" className="nav-link active">
                                <i className="fa fa-television"></i>Website
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="team.html" className="nav-link">
                                <i className="fa fa-pencil"></i>Template
                              </Link>
                            </li>
                            <li className="nav-item d-block">
                              <Link to="gallery.html" className="nav-link">
                                <i className="fa fa-question"></i>Help
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-xl-6">
              <div className="sub_header_user_profile_image float-right  p-2">
                <Link to="#" className="register_icon">
                  Syndrela T. <i className="fa fa-caret-down p-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
 export default Header