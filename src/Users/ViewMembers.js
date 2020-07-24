import React, { Component } from "react";
import axios from "axios";
import "../Base/css/main.css"

export class ViewMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => {
        console.log("data", response.data.data);
        this.setState({
          Users: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleDelte=(event)=>{
      var id=event.target.id
      var arrayInstance=this.state.Users
      axios.delete(`https://reqres.in/api/users/${id}`)
      .then((res)=>{
          if(res.status)
          {            
            console.log(arrayInstance)
            arrayInstance.splice(id,1)
            this.setState({
                Users:arrayInstance
            })
          }
      })

  }
  render() {
    let user = this.state.Users.map((res, key) => {
      return (
        <tr key={res.id}>
          <td>        
            <img className="profileimg" src={res.avatar} alt="Avatar" />
            {res.first_name}
          </td>
          <td>{res.last_name}</td>
          <td>{res.email}</td>
          <td><i id={key} onClick={this.handleDelte} className="fa fa-minus-circle iconsMargin text-danger" aria-hidden="true">Remove</i></td>
        </tr>
      );
    });
    return (
        <section>
        <div class="container-fluid">
            <div class="row align-items-center pl-4 pr-4">
                <div class="col-12 col-lg-12 pl-4 pr-4">
                    <table class="table table-borderless">
                        <thead>
                        <tr class="border-top-0">
    <th scope="col" class="table-header d-flex">Members <div class="badge badge-pill badge-primary ml-2 mt-2">{this.state.Users.length}</div> </th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">
                                <div class="btn btn-sm add-btn"><i class="fa fa-plus p-r-4"></i>Add</div></th>
                        </tr>
                        </thead>
                        <tbody>
                        {user}
                        </tbody>
                    </table>
                </div>
    
            </div>
        </div>
    </section>
    
    );
  }
}

export default ViewMembers;
