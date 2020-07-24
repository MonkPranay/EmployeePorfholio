import React, { Component } from "react";
import axios from "axios";
import "../Base/css/main.css"
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import AddMember from "./AddMember";
import ViewMembers from "./ViewMembers";


class Dashboard extends Component {
  
  render() {
    
    return (
      <>
      <div class="container-fluid">
        <Header/>
        <AddMember />
        <ViewMembers />        
      </div>
      <Footer/>
      </>
      
    );
  }
}

// <table class="table.table-striped">
//           <thead>
                
//           </thead>
//           <tbody>{user}</tbody>
//         </table>
export default Dashboard;
