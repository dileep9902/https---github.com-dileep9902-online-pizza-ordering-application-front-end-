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
class Pizza extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzas:[]
          }
    }
    componentDidMount() {
        axios.get("http://localhost:8081/pizza/v1/pizza/all").then((res) => {
          this.setState({ pizzas: res.data });
        });
      }
  //   handleSearch = (event) => {
  //   console.log("handleSearch");
  //   const pizzas = [...this.state.pizzas];
  //   this.setState({ search: event.target.value });
  //   const filteredPizzas = pizzas.filter((pizza) =>
  //     pizza.pizzaName.includes(this.state.search)
  //   );
  //   this.setState({ pizzas: filteredPizzas });
  // };


    onDelete = (pizzaId)=> {
      console.log(pizzaId);
      axios.delete(`http://localhost:8081/pizza/v1/pizza/${pizzaId}`).then((res)=> {
        const pizzas = this.state.pizzas.filter((pizza)=> pizza.pizzaId !==pizzaId);
        this.setState({ pizzas: pizzas});
      });
    }  
    render() { 
        return (
            <div>
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
              label="Search By Pizza Name"
              type="search"
              value={this.state.search}
              onChange={this.handleSearch}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
              component={Link}
              to={"/pizza/add"}
            >
              Add New Pizza
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>PizzaType</TableCell>
                <TableCell>PizzaName</TableCell>
                <TableCell>PizzaSize</TableCell>
                <TableCell>PizzaPrice</TableCell>
                <TableCell>PizzaImage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.pizzas.map((pizza) => (
                <TableRow key={pizza.pizzaId}>
                  <TableCell>{pizza.pizzaType}</TableCell>
                  <TableCell>{pizza.pizzaName}</TableCell>
                  <TableCell>{pizza.pizzaSize}</TableCell>
                  <TableCell>{pizza.pizzaPrice}</TableCell>
                  <TableCell>{pizza.pizzaImage}</TableCell>
                  <TableCell>
                  <IconButton component={Link} to={`/pizza/update/${pizza.pizzaId}`}>
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => this.onDelete(pizza.pizzaId)}>
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    
            </div>
          );
    }
}
 
export default Pizza;