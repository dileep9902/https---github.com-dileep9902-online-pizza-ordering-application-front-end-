import React, { Component } from 'react';
import {
    Typography,
    TextField,
    Grid,
    Paper,
    Button,
    Box,
  } from "@material-ui/core";
  
  import axios from "axios";
  import { Link } from "react-router-dom";
  import CouponService from '../services/couponService';
class Addcoupon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            coupon:{
                couponId: 0,
                couponName:"",
                couponDescription:"",
                couponDiscount:"",
            },
         };
    }
    handleChange = (event) => {
      console.log("handleChange");
      const coupon = { ...this.state.coupon };
      console.log(coupon);
      coupon[event.target.name] = event.target.value;
      this.setState({ coupon: coupon });
    };
    validateCoupon = ()=> {
      const cpnData={...this.state.coupon}
      const errors = {};

    if(!cpnData.couponName){
      errors.couponName = 'coupon name cannot be empty';
    }
    if(!cpnData.couponDescription){
      errors.couponDescription = 'coupon Description cannot be empty';
    }
    if(!cpnData.couponDiscount){
      errors.couponDiscount = 'coupon Discount cannot be empty';
    }else if(!/^[0-9]{1,2}$/i.test(cpnData.couponDiscount)) {
      errors.couponDiscount='Coupon Discount should be positive number';
    } 
    return Object.keys(errors).length === 0 ? null : errors;
  };

    handleFormSubmit = (event) => {
      event.preventDefault();
     const errors=this.validateCoupon();
      this.setState({ errors: errors || {} });
      if(errors)
      return
      // axios
      //   .post("http://localhost:8081/pizza/v1/coupon", this.state.coupon)
      //   .then((res) => this.props.history.push("/coupon/all"));
        CouponService.addCoupon(this.state.coupon).then((res)=>
        this.props.history.push("/coupon/all"));
    };

    render() { 
        return ( 
            <div>
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
                      backgroundColor : "lightgray",
                      marginBottom:"10px",
                      padding:"10px",
                      textAlign:"left",
                      marginTop: "20px",
                  }} 
                  >
              <Typography variant="h6">
                Add Coupon
              </Typography> 
              </Box>
                <form onSubmit={this.handleFormSubmit}>
                  <TextField
                    id="outlined-basic"
                    label="couponName"
                    // required
                    placeholder="Enter coupon Name"
                    variant="outlined"
                    name="couponName"
                    value={this.state.coupon.couponName}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                  {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.couponName}
                           </p>
                         )}

                  <TextField
                    id="outlined-basic"
                    label="coupon description"
                    placeholder="Enter coupon description"
                    variant="outlined"
                    name="couponDescription"
                    value={this.state.coupon.couponDescription}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                      {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.couponDescription}
                           </p>
                         )}

                   <TextField
                    id="outlined-number"
                    type="number"
                    label="coupon Discount"
                    // required
                    placeholder="Enter coupon discount"
                    variant="outlined"
                    name="couponDiscount"
                    value={this.state.coupon.couponDiscount}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                 {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.couponDiscount}
                           </p>
                         )}
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "10px" }}
                  component={Link}
                  to="/coupon/all"
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
          </div>
         );
    }
}
export default Addcoupon;