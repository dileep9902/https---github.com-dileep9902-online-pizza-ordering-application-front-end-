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
    Box,
    Button,
    TextField,
  } from "@material-ui/core";
  import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
  import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
  import { Link } from "react-router-dom";
  import axios from "axios";

class Addcustomer extends Component {
    constructor(props){
        super(props);
        this.state={ 

            customers:[]
         }
    }
    componentDidMount() {
        axios.get("http://localhost:8081/pizza/v1/customer/all").then((res) => {
          this.setState({ customers: res.data });
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
              label="Search By Name"
              type="search"
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
              component={Link}
              to={"/customer/Add"}
            >
              Add New Customer
            </Button>
          </Box>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>customerName</TableCell>
                    <TableCell>Mobile</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.customers.map((customer) => (
                    <TableRow key={customer.customerId}>
                      <TableCell>{customer.customerName}</TableCell>
                      <TableCell>{customer.customerMobile}</TableCell>
                      <TableCell>{customer.customerEmail}</TableCell>
                      <TableCell>{customer.customerAddress}</TableCell>
                      <TableCell>{customer.customerPassword}</TableCell>
                      <TableCell>
                        <IconButton>
                          <EditOutlinedIcon />
                        </IconButton>
                        <IconButton onClick={() => this.onDelete(customer.id)}>
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
 
export default Addcustomer;
