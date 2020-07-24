import React from "react";
import { Link } from "react-router-dom";

export default function AddMember() {
  return (
    <div>
      <section>
        <div class="container-fluid">
          <div class="row align-items-center pl-4 pr-4">
            <div class="col-lg-12 ">
              <div class="page-breadcrumb pt-3 pl-2">
                <nav aria-label="container breadcrumb ">
                  <ol class="breadcrumb bg-transparent">
                    <li class="breadcrumb-item">
                      <Link to="#" class="breadcrumb-link">
                        Home
                      </Link>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">
                      <Link to="#" class="breadcrumb-link">
                        Website
                      </Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      <Link to="#" class="breadcrumb-link">
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
        <div class="container-fluid">
          <div class="row align-items-center pl-4 pr-4">
            <div class="col-lg-12">
              <h3 class="page-header">
                <i class="fa fa-user-o pr-3 active"></i>New Team
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container-fluid">
          <div class="row align-items-center pl-4 pr-4">
            <div class="col-lg-12">
              <form role="form">
                <div class="row pl-3 pr-3">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Team Name</label>
                      <input class="form-control" placeholder="Enter Team Name" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Primary Email</label>
                      <input class="form-control" placeholder="Enter your Email " />
                    </div>
                  </div>
                </div>

                <div class="row pl-3 pr-3">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Company Name</label>
                      <input class="form-control" placeholder="Enter Company Name" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Country</label>
                      <input class="form-control" placeholder="Enter Country Name" />
                    </div>
                  </div>
                </div>

                <div class="row pl-3 pr-3">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Password</label>
                      <input class="form-control" placeholder="Enter Password" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Repeat Password</label>
                      <input class="form-control" placeholder="Re-Enter Password" />
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
