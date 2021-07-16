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
import CustomerService from '../services/customerService';

class Addcustomer extends Component {
    constructor(props){
        super(props);
        this.state={ 

            customers:[]
         }
    }
    componentDidMount() {
        // axios.get("http://localhost:8081/pizza/v1/customer/all").then((res) => {
        //   this.setState({ customers: res.data });
        // }); }
        CustomerService.getCustomers(this.state.customers)
        .then((res)=> this.setState({customers: res.data})
        )}
      onDelete = (customerId) => {
        console.log(customerId);
         axios.delete(`http://localhost:8081/pizza/v1/customer/${customerId}`)
        // CustomerService.deleteCustomer(this.state.customers)
        .then((res) => {
          const customers = this.state.customers.filter((customer) => customer.customerId !== customerId);
          this.setState({ customers: customers });
        });
      };

      handleSearch = (event) => {
        console.log("handleSearch");
        const customers = [...this.state.customers];
        this.setState({ search: event.target.value });
        const filteredcustomers = customers.filter((customer) =>
          customer.customerName.includes(this.state.search)
        );
        this.setState({ customers: filteredcustomers });
      };

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
              to={"/customer/add"}
            >
              Add Customer
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
                        <IconButton component={ Link } to={`/customer/update/${customer.customerId}`}>
                          <EditOutlinedIcon />
                        </IconButton>
                        <IconButton onClick={() => this.onDelete(customer.customerId)}>
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
