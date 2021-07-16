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

export default class Updatecoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coupon: {
        id: 0,
        couponName: "",
        couponDescription: "",
        couponDiscount: "",
      },
    };
  }

  componentDidMount() {
    axios
     .get(`http://localhost:8081/pizza/v1/coupon/${this.props.match.params.id}`)
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("handleFormSubmit");
    axios.put("http://localhost:8081/pizza/v1/coupon", this.state.coupon).then((res) => {
     this.props.history.push("/coupon");
    }); }

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
                    value={this.state.coupon.couponName}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
        
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
                   <TextField
                    id="outlined-basic"
                    label="coupon Discount"
                    placeholder="Enter coupon discount"
                    variant="outlined"
                    name="couponDiscount"
                    value={this.state.coupon.couponDiscount}
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
                  to="/coupon/all"
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit"
                 component={Link}
                 to="/coupon/all" >
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

