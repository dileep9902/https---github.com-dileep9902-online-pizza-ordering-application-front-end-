import React, { Component } from "react";
import {
  Typography,
  TextField,
  Grid,
  Paper,
  Button,
  Container,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import CustomerService from "../services/customerService";
class Updatecustomer extends Component {
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

  componentDidMount() {
    // axios
    //  .get(`http://localhost:8081/pizza/v1/customer/${this.props.match.params.customerId}`)
    //  .then((res) => this.setState({ customer: res.data })); }
    CustomerService.getCustomerById(this.props.match.params.customerId)
    .then((res)=> this.setState({customer : res.data}));
 }
 validateCustomer=()=> {
  const custData={...this.state.customer}
  const errors={};

  if (!custData.customerName) {
    errors.customerName = 'customer name cannot be empty';
  } 
  if (!custData.customerMobile) {
    errors.customerMobile = 'customer Mobile number cannot be empty';
  }else if(!/^[0-9]{10}$/i.test(custData.customerMobile)) {
    errors.customerMobile='customer Mobile number Should be 10 Digits';
  } 

  if (!custData.customerEmail) {
    errors.customerEmail = 'customer Email cannot be empty';
  } else if (!/^[A-Z0-9._%+-]+@[gmail,outlook,yahoo]+\.[A-Z]{2,4}$/i.test(custData.customerEmail)) {
    errors.customerEmail = 'Invalid customerEmail Address';
  }
  
  if(!custData.customerAddress){
    errors.customerAddress = 'customer address cannot be empty'
  }
  
  if(!custData.customerPassword){
    errors.customerPassword = 'customer password cannot be empty'
  }else if(!/(?=^.{5,}$)/i.test(custData.customerPassword)){
    errors.customerPassword = 'password must be five characters in length.'
  }
  return Object.keys(errors).length === 0 ? null : errors;
};

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("handleFormSubmit");
    const errors=this.validateCustomer();
      this.setState({ errors: errors || {} });
      if(errors)
      return
    // axios.put("http://localhost:8081/pizza/v1/customer", this.state.customer).then((res) => {
    //  this.props.history.push("/customer/all");
    // }); }
    CustomerService.updateCustomer(this.state.customer)
    .then((res) =>{
      this.props.history.push("/customer/all");
    }
    );
  };

  handleChange = (event) => {
    console.log("handleChange");
    const customer = { ...this.state.customer };
    customer[event.target.name] = event.target.value;
    this.setState({ customer : customer });
  };

  render() {
    return (
      <Container>
        <Grid
          item
          md={5}
          style={{
            marginTop: "100px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Paper elevation={3} style={{ padding: "30px", marginTop: "10px" }}>
            <Box
              style={{
                backgroundColor: "lightgray",
                marginBottom: "10px",
                padding: "10px",
                textAlign: "left",
              }}
            >
              <Typography variant="h5" style={{ marginTop: "10px" }}>
                Update Customer
              </Typography>
              </Box>
                <form onSubmit={this.handleFormSubmit}>
                  <TextField
                    id="outlined-basic"
                    label="customerName"
                    placeholder="Enter customer Name"
                    variant="outlined"
                    name="customerName"
                    required
                    value={this.state.customer.customerName}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                       {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.customerName}
                           </p>
                         )}
                  <TextField
                   id="outlined-number"
                   label="Number"
                   type="number"
                   name="customerMobile"
                   required
                   InputLabelProps={{
                     shrink: true,
                   }}
                   variant="outlined"
                    value={this.state.customer.customerMobile}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                      {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.customerMobile}
                           </p>
                         )}
                  <TextField
                    id="outlined-Email"
                    label="customerEmail"
                    placeholder="Enter customer Email"
                    type="email"
                    variant="outlined"
                    name="customerEmail"
                    required
                    value={this.state.customer.customerEmail}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                      {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.customerEmail}
                           </p>
                         )}
                <TextField
                   id="outlined-textarea"
                   label="customer address"
                   placeholder="Enter your address"
                   multiline
                   variant="outlined"
                   name="customerAddress"
                   required
                    value={this.state.customer.customerAddress}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                          {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.customerAddress}
                           </p>
                         )}

                    <TextField
                    id="outlined-password-input"
                    label="Password"
                    placeholder="create password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    name="customerPassword"
                    required
                    value={this.state.customer.customerPassword}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                     {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.customerPassword}
                           </p>
                         )}
                        <h6>password must be five characters in length.</h6>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "10px" }}
                  component={Link}
                  to="/customer/all"
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit" >
                  Save
                </Button>
              </div>
                </form>
          </Paper>
        </Grid>
      </Container>
    );
  }
}
  export default Updatecustomer;

