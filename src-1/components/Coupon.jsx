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
  import axios from "axios";

 import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Link } from "react-router-dom";


class Coupon extends Component {
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
            <Container>
            <TableContainer
              component={Paper}
              elevation={3}
              style={{ padding: "20px", marginTop: "80px" }}
            >
             <Box style={{ display: "flex", justifyContent: "flex-end" }}>
            <TextField
              id="search"
              variant="filled"
              label="Search coupon By Id"
              type="search"
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
              component={Link}
              to={"/coupon/Add"}
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
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.coupons.map((coupon) => (
                    <TableRow key={coupon.couponId}>
                       <TableCell>{coupon.couponName}</TableCell>
                      <TableCell>{coupon.couponDescription}</TableCell>
                      <TableCell>{coupon.couponDiscount}</TableCell>
                      <TableCell>
                        <IconButton>
                          <EditOutlinedIcon />
                        </IconButton>
                        <IconButton onClick={() => this.onDelete(coupon.couponid)}>
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