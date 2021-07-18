import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import pizza from "./pizza";
import {
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Paper,
  Button,
  Box,
  TextField,
  IconButton,
} from "@material-ui/core";

//import { useState} from 'react';

//import Card from "react-bootstrap/Card";

class PizzaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8081/pizza/v1/pizza/all").then((res) => {
      this.setState({ pizzas: res.data });
    });
  }

  handleSearch = (event) => {
    console.log("handleSearch");
    const pizzas = [...this.state.pizzas];
    this.setState({ search: event.target.value });
    const filteredPizzas = pizzas.filter((pizza) =>
      pizza.pizzaType.includes(this.state.search)
    );
    this.setState({ pizzas: filteredPizzas });
  };

  // handleAddtocart = (event) => {
  //   console.log("handleAddtocart");
  //   const pizza = { ...this.state.pizzas };
  //   this.setState({ Addtocart: event.target.value});
  //   pizza.PizzaList.includes(this.state.addtocart)
  //   pizza[event.target.name] = event.target.value;
  // };

  //   onAdd =(event) => {
  //      event.preventDefault();
  //     axios
  //     .post("http://localhost:8081/pizza/v1/cart/add", this.state.pizza)
  //     .then((res) => this.props.history.push("/cart"));
  // };

  onAdd = (pizza) => {
    // event.preventDefault();
    const cartItem = {
      "itemQuanity": 1,
     "pizza": pizza,
     "serialNo": 0,
     
    };
    axios
      .post("http://localhost:8081/pizza/v1/cart/add", cartItem)
      .then((res) => console.log(res));
  };

  render() {
    console.log(this.state.pizzas);
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item md={9}>
            <Paper elevation={3} style={{ padding: "20px", marginTop: "80px" }}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "50px",
                }}
              >
                <TextField
                  id="search"
                  variant="filled"
                  label="Search By Pizza Type"
                  type="search"
                  value={this.state.search}
                  onChange={this.handleSearch}
                />
              </Box>
              <Grid container spacing={5}>
                {this.state.pizzas.map((pizza) => (
                  <Grid item md={4} key={pizza.pizzaId}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="140"
                          // image={`../public/images/${pizza.pizzaImage}`}
                          image={`./images/${pizza.pizzaImage}`}
                        />
                        <CardContent>
                          <Typography align="left" variant="body2">
                            {pizza.pizzaName}
                          </Typography>
                          <Typography align="left" variant="body2">
                            {pizza.pizzaType}
                          </Typography>
                          <Typography variant="body2">
                            {pizza.pizzaDescription}
                          </Typography>
                          <Typography align="right">
                            ${pizza.pizzaPrice}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Button
                      variant="contained"
                      color="primary"
                      type="button"
                      component={Link}
                      to="/cart"
                      onClick={() => this.onAdd(pizza)}
                    >
                      {/* <IconButton  onClick={() => this.handleAddtoCart(pizza.PizzaId)}/> */}
                      Add to Cart
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      component={Link}
                      to="/payment"
                    >
                      Buy Now
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PizzaList;
