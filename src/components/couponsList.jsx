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
    Button,
  } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from 'axios';
class CouponList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           coupons:[],
         }
    }
    componentDidMount() {
        axios.get("http://localhost:8081/pizza/v1/coupon/all").then((res) => {
          this.setState({ coupons: res.data });
        });
      }

    render() { 
        return ( 
            <Container style={{ marginTop: "20px"}}>
            <TableContainer
              component={Paper}
              elevation={3}
              style={{ padding: "20px", marginTop: "80px" }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>couponName</TableCell>
                    <TableCell>couponDescription</TableCell>
                    <TableCell>couponDiscount</TableCell>
                    <TableCell>AddCoupon</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.coupons.map((coupon) => (
                    <TableRow key={coupon.couponId}>
                       <TableCell>{coupon.couponName}</TableCell>
                      <TableCell>{coupon.couponDescription}</TableCell>
                      <TableCell>{coupon.couponDiscount}</TableCell>
                      <TableCell>
                      <Button variant="outlined" color="primary" component={ Link } to="/coupon/all">
                        Apply
                        </Button>
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
export default CouponList;