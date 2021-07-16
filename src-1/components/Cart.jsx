import React, { Component } from "react";
import Counter from "./Counter";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import {
  Paper,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Grid,
  IconButton,
  Box,
} from "@material-ui/core";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Samsung",
          price: 15000.0,
          quantity: 1,
        },
        {
          id: 2,
          name: "Nokia",
          price: 18000.0,
          quantity: 1,
        },
        {
          id: 3,
          name: "Mi",
          price: 12000.0,
          quantity: 1,
        },
      ],
    };
  }

  handleIncrement = (id) => {
    console.log(id);
    const products = [...this.state.products];
    console.log(products);
    products.map((product) =>
      product.id === id ? (product.quantity += 1) : product
    );
    this.setState({ products: products });
  };
  handleDecrement = (id) => {
    console.log(id);
    const products = [...this.state.products];
    products.map((product) =>
      product.id === id && product.quantity - 1 >= 0
        ? (product.quantity -= 1)
        : product
    );
    this.setState({ products });
  };

  render() {
    const { products } = this.state;

    return (
      <Container style={{ marginTop: "100px" }}>
        <Box>
          <Grid item md={9}>
            <TableContainer component={Paper} elevation={3}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Item Total Price</TableCell>
                    <TableCell>Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.id}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>
                        <Counter
                          product={product}
                          handleDecrement={this.handleDecrement}
                          handleIncrement={this.handleIncrement}
                        />
                      </TableCell>
                      <TableCell>{product.price * product.quantity}</TableCell>
                      <TableCell>
                        <IconButton aria-label="delete">
                          <DeleteOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default Cart;