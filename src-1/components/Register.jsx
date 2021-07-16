import { Component } from "react";
import {
  Typography,
  TextField,
  InputLabel,
  FormControl,
  Select,
  Grid,
  Paper,
  Button,
} from "@material-ui/core";

import axios from "axios";

// Class component
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      name: "hai",
      user: {
        id: 0,
        userName: "",
        email: "",
        mobileNo: "",
        userId: "",
        password: "",
        role: "",
      },
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("handleFormSubmit called");
    console.log(this.state.user);
    axios.post("http://8081/pizza/v1/customer", this.state.user).then((res) => {
      console.log(res);
      this.props.history.push("/login");
    });
  };
  handleChange = (event) => {
    //console.log(event.target.name); // returns field name
    //console.log(event.target.value); // return value entered by users
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  render() {
    return (
      <div>
        <Grid
          item
          md={6}
          style={{
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography variant="h5" style={{ marginTop: "70px" }}>
            Register Form
          </Typography>
          <Paper elevation={3} style={{ padding: "30px", marginTop: "10px" }}>
            <form onSubmit={this.handleFormSubmit}>
              <TextField
                id="outlined-basic"
                label="Fullname"
                placeholder="Enter your full name"
                variant="outlined"
                name="userName"
                value={this.state.user.userName}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
                id="outlined-email"
                label="Email"
                placeholder="Enter email"
                variant="outlined"
                type="email"
                name="email"
                value={this.state.user.email}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
                id="outlined-mobile"
                label="Mobile No"
                placeholder="Enter mobile number"
                variant="outlined"
                name="mobileNo"
                value={this.state.user.mobileNo}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
                id="outlined-userid"
                label="User Id"
                placeholder="Enter user id"
                variant="outlined"
                name="userId"
                value={this.state.user.userId}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
                id="outlined-password"
                label="Password"
                placeholder="Enter password"
                variant="outlined"
                type="password"
                name="password"
                value={this.state.user.password}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <FormControl
                variant="filled"
                fullWidth
                style={{ marginBottom: 10 }}
              >
                <InputLabel htmlFor="filled-age-native-simple">Role</InputLabel>
                <Select
                  native
                  value={this.state.user.role}
                  name="role"
                  onChange={this.handleChange}
                  inputProps={{
                    name: "role",
                    id: "filled-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Register
              </Button>
            </form>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default Register;
