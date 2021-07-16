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
import CouponService from "../services/couponService";
class Updatecoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coupon: {
        couponId: 0,
        couponName: "",
        couponDescription: "",
        couponDiscount: "",
      },
    };
  }

  componentDidMount() {
    // axios
    //  .get(`http://localhost:8081/pizza/v1/coupon/${this.props.match.params.couponId}`) 
    //  .then((res) => this.setState({ coupon: res.data })); }
    CouponService.getCouponById(this.props.match.params.couponId)
    .then((res)=> this.setState({coupon : res.data}));
 }

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
    console.log("handleFormSubmit");
    const errors=this.validateCoupon();
    this.setState({ errors: errors || {} });
    if(errors)
    return
    // axios.put("http://localhost:8081/pizza/v1/coupon", this.state.coupon).then((res) => {
    //  this.props.history.push("/coupon/all");
    // }); 
    CouponService.updateCoupon(this.state.coupon)
    .then((res) =>{
      this.props.history.push("/coupon/all");
    }
    );
  };

  handleChange = (event) => {
    console.log("handleChange");
    const coupon = { ...this.state.coupon };
    coupon[event.target.name] = event.target.value;
    this.setState({ coupon : coupon });
  };

  render() {
    return (
      <Container style={{ paddingTop: "70px" }}>
        <Grid
          item
          md={5}
          style={{
            marginTop: "20px",
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
              <Typography variant="h6">Update Coupon</Typography>
            </Box>
            <form onSubmit={this.handleFormSubmit}>
                  <TextField
                    id="outlined-basic"
                    label="couponName"
                    placeholder="Enter coupon Name"
                    variant="outlined"
                    name="couponName"
                    required
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
                    id="outlined-basic"
                    label="coupon Discount"
                    placeholder="Enter coupon discount"
                    variant="outlined"
                    name="couponDiscount"
                    required
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
      </Container>
    );
  }
}
  export default Updatecoupon;

