import React, { Component } from 'react';
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
  import { Link } from "react-router-dom";
class Addcustomer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            customer:{
                customerId: 0,
                customerName:"",
                customerMobile:"",
                customerEmail:"",
                customerAddress:"",
                customerPassword:"",
            },
         };
    }
    handleChange = (event) => {
      console.log("handleChange");
      const customer = { ...this.state.customer };
      console.log(customer);
      customer[event.target.name] = event.target.value;
      this.setState({ customer: customer });
      //this.setState({ user });
    };
  
    handleFormSubmit = (event) => {
      event.preventDefault();
      axios
        .post("http://localhost:8081/pizza/v1/customer", this.state.customer)
        .then((res) => this.props.history.push("/customer"));
    };
    render() { 
        return ( 
            <div>
            <Grid
              item
              md={5}
              style={{
                marginTop: "20px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Typography variant="h5" style={{ marginTop: "70px" }}>
                Add Customer
              </Typography>
              <Paper elevation={3} style={{ padding: "30px", marginTop: "10px" }}>
                <form onSubmit={this.handleFormSubmit}>
                  <TextField
                    id="outlined-basic"
                    label="customerName"
                    placeholder="Enter customer Name"
                    variant="outlined"
                    name="customerName"
                    value={this.state.customer.customerName}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />

                  <TextField
                    id="outlined-mobile"
                    label="customerMobile"
                    placeholder="Enter customer Mobile"
                    variant="outlined"
                    name="customerMobile"
                    value={this.state.customer.customerMobile}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />

                  <TextField
                    id="outlined-Email"
                    label="customerEmail"
                    placeholder="Enter customer Email"
                    variant="outlined"
                    name="customerEmail"
                    value={this.state.customer.customerEmail}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />

                <TextField
                    id="outlined-Address"
                    label="customerAddress"
                    placeholder="Enter customer Address"
                    variant="outlined"
                    name="customerAddress"
                    value={this.state.customer.customerAddress}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                    <TextField
                    id="outlined-Password"
                    label="customerPassword"
                    placeholder="Enter customer Password"
                    variant="outlined"
                    name="customerPassword"
                    value={this.state.customer.customerPassword}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "10px" }}
                  component={Link}
                  to="/customer"
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Save
                </Button>
              </div>
                </form>
              </Paper>
            </Grid>
          </div>
         );
    }
}
 
export default Addcustomer;