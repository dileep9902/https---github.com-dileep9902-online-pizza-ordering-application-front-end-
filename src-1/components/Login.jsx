import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userId: "",
        password: "",
        role: "",
      },
    };
  }
  handleChange = (event) => {
    console.log("handleChange");
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    //this.setState({ user: user });
    this.setState({ user });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .post("http://localhost:8082/login", this.state.user)
      .then((res) => this.props.history.push("/users"));
  };
  render() {
    return (
      <div>
        <Typography variant="h1" style={{ marginTop: "100px" }}>
          Login Form
        </Typography>
        <form className="w-50 mx-auto border p-3" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              User Id
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="userId"
              value={this.state.user.userId}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={this.state.user.password}
              onChange={this.handleChange}
            />
          </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            name="role"
            onChange={this.handleChange}
          >
            <option value="customer">Customer</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;