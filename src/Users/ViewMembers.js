import React, { Component } from "react";
import axios from "axios";
import toaster from "toasted-notes";
import "../Base/css/main.css";
import { Link } from "react-router-dom";
import "../Base/css/main.css";

export class ViewMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      redirect: null,
    };
  }
  componentDidMount() {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => {
        this.setState({
          Users: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleDelte = (event) => {
    var id = event.target.id;
    var arrayInstance = this.state.Users;
    axios.delete(`https://reqres.in/api/users/${id}`).then((res) => {
      if (res.status === 204) {
        arrayInstance.splice(id, 1);
        this.setState({
          Users: arrayInstance,
        });

        toaster.notify(
          <div
            gutter="false"
            className=" Toaster__manager-top alert alert-success successMessage"
          >
            User Deleted successfully
          </div>
        );
      } else {
        toaster.notify("User Deletion failed ", {
          duration: 1000,
        });
      }
    });
  };
  render() {
    let user = this.state.Users.map((res, key) => {
      return (
        <tr key={res.id}>
          <td
            onClick={this.handleProfile}
            className="cursorPointer"
            id={res.id}
          >
            <img className="profileimg" src={res.avatar} alt="Avatar" />
            <Link
              to={{
                pathname: "/dashbord/Profile",
                aboutProps: {
                  id: res.id,
                  first_name: res.first_name,
                  last_name: res.last_name,
                  email: res.email,
                  imgsrc: res.avatar,
                },
              }}
            >
              {res.first_name}
            </Link>
          </td>
          <td>{res.last_name}</td>
          <td>{res.email}</td>
          <td>
            <i
              id={key}
              onClick={this.handleDelte}
              className="fa fa-minus-circle  text-danger "
              aria-hidden="true"
            >
              <b className="iconsMargin">Remove</b>
            </i>
          </td>
        </tr>
      );
    });
    return (
      <section>
        <div className="container-fluid">
          <div className="row align-items-center pl-4 pr-4">
            <div className="col-12 col-lg-12 pl-4 pr-4">
              <table className="table table-borderless">
                <thead>
                  <tr className="border-top-0">
                    <th scope="col" className="table-header d-flex">
                      Members{" "}
                      <div className="badge badge-pill badge-primary ml-2 mt-2">
                        {this.state.Users.length}
                      </div>{" "}
                    </th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">
                      <div className="btn btn-sm add-btn">
                        <i className="fa fa-plus p-r-4"></i>Add
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>{user}</tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ViewMembers;
