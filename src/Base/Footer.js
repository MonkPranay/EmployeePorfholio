import React from "react";
import "../Base/css/main.css"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="sub_footer">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-xl-12">
              <div className="text-center p-3">
                Have question?
                <Link to="#" className="text-primary">
                   Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
