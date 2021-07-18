import React, { Component } from "react";
import {
  Typography,
  TextField,
  Grid,
  Paper,
  Button,
  Container,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
 import axios from "axios";
//import PizzaService from "../services/pizzaservice";

class updatePizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: {
        pizzaId: 0,
        pizzaType: "",
        pizzaName: "",
        pizzaSize: "",
        pizzaPrice: 0,
        pizzaImage:"",
      },
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8081/pizza/v1/pizza/${this.props.match.params.id}`)
      .then((res) => this.setState({ pizza: res.data }));
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("handleFormSubmit");
    const errors=this.validatePizza();
    this.setState({ errors: errors || {} });
    if(errors)
    return
  {
    const pizza = {
      pizzaType: "",
      pizzaName:"",
      pizzaSize: "",
      pizzaPrice: "",
    }
    this.setState({
      pizza:pizza
    })
    alert("Added Successfully");
}
    axios.put("http://localhost:8081/pizza/v1/pizza", this.state.pizza).then((res) => {
      this.props.history.push("/pizzas");
    });
    };
  

  handleChange = (event) => {
    console.log("handleChange");
    const pizza = { ...this.state.pizza };
    pizza[event.target.name] = event.target.value;
    this.setState({ pizza: pizza });
  };

  validatePizza=()=> {
    const partData={...this.state.pizza}
    const errors={};

    if (!partData.pizzaType) {
      errors.pizzaType = 'pizza type cannot be empty';
    } else if (partData.pizzaType.length > 20) {
      errors.pizzaType = 'Type cannot exceed 20 characters';
    }

    if (!partData.pizzaName) {
      errors.pizzaName = 'pizza name cannot be empty';
    } else if (partData.pizzaName.length > 20) {
      errors.pizzaName = 'Name cannot exceed 20 characters';
    }

    if (!partData.pizzaSize) {
      errors.pizzaSize = 'pizza size cannot be empty';
    } else if (partData.pizzaSize.length > 20) {
      errors.pizzaSize = 'Size cannot exceed 20 characters';
    }
    console.log(partData.pizzaPrice)

    if (!partData.pizzaPrice) {
      errors.pizzaPrice = 'pizza price cannot be empty';
    } else if (partData.pizzaPrice<0 ) {
      errors.pizzaPrice = 'pizza price should be positive value';
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

 


  render() {
    return (
      <Container style={{ paddingTop: "70px" }}>
        <Grid
          item
          md={5}
          style={{
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Paper elevation={3} style={{ padding: "30px", marginTop: "10px" }}>
            <Box
              style={{
                backgroundColor: "lightgray",
                marginBottom: "10px",
                padding: "10px",
                textAlign: "left",
              }}
            >
              <Typography variant="h6">Update Pizza</Typography>
            </Box>
            <form onSubmit={this.handleFormSubmit}>
              {/* <span>{  }</span> */}
            <TextField
               // id="outlined-basic"
                label="PizzaImage"
                placeholder="Enter image location"
                name="pizzaImage"
                required
                value={this.state.pizza.pizzaImage}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
               // id="outlined-basic"
                label="PizzaType"
                placeholder="Enter type of pizza"
                name="pizzaType"
                value={this.state.pizza.pizzaType}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
               {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.pizzaType}
                           </p>
                         )}
              <TextField
               // id="outlined-"
                label="PizzaName"
                placeholder="Enter pizza name"
                name="pizzaName"
                value={this.state.pizza.pizzaName}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.pizzaName}
                           </p>
                         )}
              <TextField
              //  id="outlined-size"
                label="PizzaSize"
                placeholder="Enter pizza size"
                name="pizzaSize"
                value={this.state.pizza.pizzaSize}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.pizzaSize}
                           </p>
                         )}
               <TextField
              //  id="outlined-price"
                label="PizzaPrice"
                placeholder="Enter pizza price"
                name="pizzaPrice"
                value={this.state.pizza.pizzaPrice}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
               {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.pizzaPrice}
                           </p>
                         )}

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "10px" }}
                  component={Link}
                  to="/pizzas"
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  update
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Container>
    );
  
}

}
export default updatePizza;