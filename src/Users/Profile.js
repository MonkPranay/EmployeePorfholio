import React from "react";
import { Link } from "react-router-dom";

export default function Profile(props) {
  const {
    id,
    first_name,
    last_name,
    imgsrc,
  } = props.location.aboutProps;
  

  return (
    <section>
      <div className="container-login100 d-block">
        <div className="row align-items-center pl-4 pr-4">
          <div className="col-lg-12 ">
            <div className="row p-5">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="container-fluid d-inline">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="profile_image">
                            <img
                              src={imgsrc}
                              className="card-img"
                              alt=" Profile"
                            />
                            <button className="btn btn-primary choose-image">
                              Change Photo
                            </button>
                          </div>
                          <div className="profile-details">
                            <p>WORK LINK</p>
                            <Link to="">Website Link</Link>
                            <br />
                            <Link to="">Bootsnipp Profile</Link>
                            <br />
                            <Link to="">Bootply Profile</Link>
                            <p>SKILLS</p>
                            <Link to="">Web Designer</Link>
                            <br />
                            <Link to="">Web Developer</Link>
                            <br />
                            <Link to="">WordPress</Link>
                            <br />
                            <Link to="">WooCommerce</Link>
                            <br />
                            <Link to="">PHP, .Net</Link>
                            <br />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <h5 className="card-title">{first_name} {last_name}</h5>
                          <p className="card-text">Web Developer and Designer</p>
                          <p className="card-text pt-3 pb-3">
                            <span className="text-muted rating">
                              RANKINGS : <b>8/10</b>
                            </span>
                          </p>
                          <ul className="nav nav-tabs ">
                            <li className="pb-3">
                              <Link
                                className="p-3 active tab-header"
                                data-toggle="tab"
                                href="#about"
                                aria-expanded="true"
                              >
                                About
                              </Link>
                            </li>
                            <li className="pb-3">
                              <Link
                                className="p-3 tab-header"
                                data-toggle="tab"
                                href="#timeline"
                                aria-expanded="false"
                              >
                                Timeline
                              </Link>
                            </li>
                          </ul>

                          <div className="tab-content active">
                            <div
                              id="about"
                              className="tab-pane fade in active show"
                            >
                              <div className="row">
                                <div className="col-md-6 pt-3">
                                  <label>User Id</label>
                                </div>
                                <div className="col-md-6 pt-3">
                                  <p>{id}</p>
                                </div>

                                <div className="col-md-6 pt-3">
                                  <label>Name</label>
                                </div>
                                <div className="col-md-6 pt-3">
                                  <p>{first_name}{last_name}</p>
                                </div>
                              </div>
                            </div>
                            <div id="timeline" className="tab-pane fade">
                              <div className="row">
                                <div className="col-md-6 pt-3">
                                  <label>User Id</label>
                                </div>
                                <div className="col-md-6 pt-3">
                                  <p>Kshiti123</p>
                                </div>

                                <div className="col-md-6 pt-3">
                                  <label>Name</label>
                                </div>
                                <div className="col-md-6 pt-3">
                                  <p>Kshiti Ghelani</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
