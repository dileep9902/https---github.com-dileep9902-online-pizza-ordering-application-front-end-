import React, { Component } from "react";
//import Counter from "./counter2";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import axios from "axios";
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Link } from "react-router-dom";
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
 
  Button,
  Box,
} from "@material-ui/core";

import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      // item:pizza,
      itemTotal: 0,
    };
  }
  handleIncrement = (id) => {
    console.log(id);
    const cart = [...this.state.cart];
    console.log(cart);
    cart.map((c) => (c.serialNo === id ? (c.itemQuantity += 1) : c));
    this.setState({ cart: cart });
    console.log(cart);
  };
  handleDecrement = (id) => {
    console.log(id);
    const cart = [...this.state.cart];
    cart.map((c) =>
      c.serialNo === id && c.itemQuantity - 1 >= 0
        ? (c.itemQuantity -= 1)
        : cart
    );
    this.setState({ cart });
  };

  // useEffect(() => {
  //   dispatch ({ type: "Get_total"});
  //   console.log("item")
  // }, [state.item] )

  componentDidMount() {
    axios.get("http://localhost:8081/pizza/v1/cart/all").then((res) => {
      this.setState({ cart: res.data });
    });
  }
  onDelete = (serialNo) => {
    console.log(serialNo);
    axios
      .delete(`http://localhost:8081/pizza/v1/cart/${serialNo}`)
      .then((res) => {
        const pizzas = this.state.cart.filter(
          (pizza) => pizza.serialNo !== serialNo
        );
        this.setState({ cart: pizzas });
      });
  };
  render() {
    console.log(this.state.cart);

    return (
      <Container style={{ marginTop: "120px" }}>
        <Box>
          <Grid item md={9}>
            <TableContainer component={Paper} elevation={3}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>PizzaName</TableCell>
                    <TableCell>PizzaPrice</TableCell>

                    <TableCell>PizzaType</TableCell>
                    <TableCell>PizzaQuantity</TableCell>
                    <TableCell>ItemTotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.cart.map((pizza) => (
                    <TableRow key={pizza.pizza.pizzaId}>
                      <TableCell>{pizza.pizza.pizzaName}</TableCell>
                      <TableCell>{pizza.pizza.pizzaPrice}</TableCell>
                      <TableCell>{pizza.pizza.pizzaType}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={()=>this.handleDecrement(pizza.serialNo)}
                          aria-label="decrement"
                        >
                          <RemoveIcon/>
                        </IconButton>
                        {pizza.itemQuantity}
                        <IconButton
                          onClick={()=>this.handleIncrement(pizza.serialNo)}
                          aria-label="increment"
                        >
                         <AddIcon/>
                        </IconButton>
                        {/* <Counter
                          pizza={pizza}
                          handleDecrement={this.handleDecrement}
                          handleIncrement={this.handleIncrement}
                        /> */}
                      </TableCell>
                      <TableCell>
                        {pizza.pizza.pizzaPrice * pizza.itemQuantity}
                      </TableCell>

                      <TableCell>
                        <IconButton
                          onClick={() => this.onDelete(pizza.serialNo)}
                        >
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </TableCell>
                      {/* {console.log( typeof (this.state.pizza.pizzaPrice))} */}
                    </TableRow>
                  ))}
                </TableBody>
                <Button variant="contained" color="primary">
                  Add Coupon
                </Button>
              </Table>
            </TableContainer>
          </Grid>
        </Box>
        {/* <Button variant="contained" marginTop ="100px" color="primary">Add Coupon</Button>  */}
      </Container>
    );
  }
}
export default Cart;