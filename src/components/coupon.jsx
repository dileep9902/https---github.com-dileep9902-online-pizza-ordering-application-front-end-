import React, { Component } from 'react';
import {
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Container,
    IconButton,
    TextField,
    Button,
    Box,
  } from "@material-ui/core";
 import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Link } from "react-router-dom";
import axios from 'axios';
import CouponService from '../services/couponService';
class Coupon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           coupons:[],
         }
    }
    componentDidMount() {
        // axios.get("http://localhost:8081/pizza/v1/coupon/all").then((res) => {
        //   this.setState({ coupons: res.data });
        // });
      CouponService.getAllCoupons(this.state.coupons)
      .then((res)=> this.setState({coupons: res.data})
      );
      }
    onDelete = (couponId) => {
      console.log(couponId);
      axios.delete(`http://localhost:8081/pizza/v1/coupon/${couponId}`).then((res) => {
        const coupons = this.state.coupons.filter((coupon) => coupon.couponId !== couponId);
        this.setState({ coupons: coupons });
    });
  };
    handleSearch = (event) => {
      console.log("handleSearch");
      const coupons = [...this.state.coupons];
      this.setState({ search: event.target.value });
      const filteredCoupons = coupons.filter((coupon) =>
        coupon.couponName.includes(this.state.search)
      );
      this.setState({ coupons: filteredCoupons });
    };

    render() { 
        return ( 
            <Container>
            <TableContainer
              component={Paper}
              elevation={3}
              style={{ padding: "20px", marginTop: "80px" ,justifyContent: "flex-end"}}
            >
             <Box style={{ display: "flex", justifyContent: "flex-end" }}>
            <TextField
              id="search"
              variant="filled"
              label="Search coupon By Name"
              type="search"
            />
             {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form> */}
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
              component={Link}
              to={"/coupon/add"}
            >
              Add New Coupon
            </Button>
          </Box>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>couponName</TableCell>
                    <TableCell>couponDescription</TableCell>
                    <TableCell>couponDiscount</TableCell>
                    <TableCell>Update</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.coupons.map((coupon) => (
                    <TableRow key={coupon.couponId}>
                       <TableCell>{coupon.couponName}</TableCell>
                      <TableCell>{coupon.couponDescription}</TableCell>
                      <TableCell>{coupon.couponDiscount}</TableCell>
                      <TableCell>
                        <IconButton component={ Link } to={`/coupon/update/${coupon.couponId}`}>
                          <EditOutlinedIcon />
                        </IconButton>
                        </TableCell>
                        <TableCell>
                        <IconButton onClick={() => this.onDelete(coupon.couponId)}>
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
         );
    }
}
export default Coupon;