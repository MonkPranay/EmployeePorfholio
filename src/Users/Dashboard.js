import React, { Component } from "react";
import "../Base/css/main.css";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import AddMember from "./AddMember";
import ViewMembers from "./ViewMembers";

class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <Header />
          <AddMember />
          <ViewMembers />
        </div>
        <Footer />
      </>
    );
  }
}

export default Dashboard;
