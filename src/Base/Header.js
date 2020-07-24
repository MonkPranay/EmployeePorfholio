import React from "react";
import { Link, useHistory } from "react-router-dom";

const Header=()=> {
  return (
    <header class="header_area">
      <div class="sub_header">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-4 col-xl-6">
              <div class="main_menu">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <nav class="navbar navbar-expand-lg navbar-light">
                        <button
                          class="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                          class="collapse navbar-collapse"
                          id="navbarSupportedContent"
                        >
                          <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                              <Link class="nav-link" to="index.html">
                                <i class="fa fa-dashboard"></i>Dashboard
                              </Link>
                            </li>
                            <li class="nav-item">
                              <Link to="about.html" class="nav-link active">
                                <i class="fa fa-television"></i>Website
                              </Link>
                            </li>
                            <li class="nav-item">
                              <Link to="team.html" class="nav-link">
                                <i class="fa fa-pencil"></i>Template
                              </Link>
                            </li>
                            <li class="nav-item d-block">
                              <Link to="gallery.html" class="nav-link">
                                <i class="fa fa-question"></i>Help
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
            <div class="col-md-8 col-xl-6">
              <div class="sub_header_user_profile_image float-right  p-2">
                <Link to="#" class="register_icon">
                  Syndrela T. <i class="fa fa-caret-down p-1"></i>
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