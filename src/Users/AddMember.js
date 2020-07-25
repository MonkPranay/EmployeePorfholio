import React from "react";
import { Link } from "react-router-dom";

export default function AddMember() {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row align-items-center pl-4 pr-4">
            <div className="col-lg-12 ">
              <div className="page-breadcrumb pt-3 pl-2">
                <nav aria-label="container breadcrumb ">
                  <ol className="breadcrumb bg-transparent">
                    <li className="breadcrumb-item">
                      <Link to="#" className="breadcrumb-link">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <Link to="#" className="breadcrumb-link">
                        Website
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <Link to="#" className="breadcrumb-link">
                        New Team
                      </Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row align-items-center pl-4 pr-4">
            <div className="col-lg-12">
              <h3 className="page-header">
                <i className="fa fa-user-o pr-3 active"></i>New Team
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row align-items-center pl-4 pr-4">
            <div className="col-lg-12">
              <form role="form">
                <div className="row pl-3 pr-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Team Name</label>
                      <input className="form-control" placeholder="Enter Team Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Primary Email</label>
                      <input className="form-control" placeholder="Enter your Email " />
                    </div>
                  </div>
                </div>

                <div className="row pl-3 pr-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Company Name</label>
                      <input className="form-control" placeholder="Enter Company Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Country</label>
                      <input className="form-control" placeholder="Enter Country Name" />
                    </div>
                  </div>
                </div>

                <div className="row pl-3 pr-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" placeholder="Enter Password" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Repeat Password</label>
                      <input className="form-control" placeholder="Re-Enter Password" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
