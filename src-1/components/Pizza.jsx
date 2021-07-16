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
            pizzas:[],
         }
    }
    componentDidMount() {
        axios.get("http://localhost:8081/pizza/v1/pizza/all").then((res) => {
          this.setState({ pizzas: res.data });
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
              label="Search Pizza By Type"
              type="search"
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
              component={Link}
              to={"/pizza/Add"}
            >
              Add New Pizza
            </Button>
          </Box>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>pizzaType</TableCell>
                    <TableCell>pizzaName</TableCell>
                    <TableCell>pizzaSize</TableCell>
                    <TableCell>pizzaPrice</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.pizzas.map((pizza) => (
                    <TableRow key={pizza.pizzaId}>
                      <TableCell>{pizza.pizzaType}</TableCell>
                      <TableCell>{pizza.pizzaName}</TableCell>
                      <TableCell>{pizza.pizzaSize}</TableCell>
                      <TableCell>{pizza.pizzaPrice}</TableCell>
                      <TableCell>
                        <IconButton>
                          <EditOutlinedIcon />
                        </IconButton>
                        <IconButton onClick={() => this.onDelete(pizza.pizzaid)}>
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
 
export default Pizza;