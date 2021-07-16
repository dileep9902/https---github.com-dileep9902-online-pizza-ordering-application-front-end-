import React, { Component } from 'react';
import {
    Typography,
    TextField,
    InputLabel,
    FormControl,
    Select,
    Grid,
    Paper,
    Button,
  } from "@material-ui/core";
  
  import axios from "axios";
  import { Link } from "react-router-dom";
class Addpizza extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pizza:{
                pizzaId: 0,
                pizzaType:"",
                pizzaName:"",
                pizzaSize:"",
                pizzaPrice:"",
            },
         };
    }
    handleChange = (event) => {
      console.log("handleChange");
      const pizza = { ...this.state.pizza };
      console.log(pizza);
      pizza[event.target.name] = event.target.value;
      this.setState({ pizza: pizza });
      //this.setState({ user });
    };
  
    handleFormSubmit = (event) => {
      event.preventDefault();
      axios
        .post("http://localhost:8081/pizza", this.state.pizza)
        .then((res) => this.props.history.push("/pizza"));
    };
    render() { 
        return ( 
            <div>
            <Grid
              item
              md={5}
              style={{
                marginTop: "20px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Typography variant="h5" style={{ marginTop: "70px" }}>
                Add Pizza
              </Typography>
              <Paper elevation={3} style={{ padding: "30px", marginTop: "10px" }}>
                <form onSubmit={this.handleFormSubmit}>
                  <TextField
                    id="outlined-basic"
                    label="PizzaName"
                    placeholder="Enter Pizza Name"
                    variant="outlined"
                    name="pizzaName"
                    value={this.state.pizza.pizzaName}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
        
                  <TextField
                    id="outlined-price"
                    label="Pizza Price"
                    placeholder="Enter Pizza Price"
                    variant="outlined"
                    name="pizzaPrice"
                    value={this.state.pizza.pizzaPrice}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                 <FormControl
                    variant="filled"
                    fullWidth
                    style={{ marginBottom: 10 }}
                  >
                    <InputLabel htmlFor="filled-age-native-simple">PizzaSize</InputLabel>
                    <Select
                      native
                      value={this.state.pizza.pizzaSize}
                      name="pizzaSize"
                      onChange={this.handleChange}
                      inputProps={{
                        name: "pizzaSize",
                        id: "filled-age-native-simple",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                    </Select>
                  </FormControl>
                  <FormControl
                    variant="filled"
                    fullWidth
                    style={{ marginBottom: 10 }}
                  >
                    <InputLabel htmlFor="filled-age-native-simple">Pizza Type</InputLabel>
                    <Select
                      native
                      value={this.state.pizza.pizzaType}
                      name="pizzaType"
                      onChange={this.handleChange}
                      inputProps={{
                        name: "pizzaType",
                        id: "filled-age-native-simple",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value="NonVeg">NonVeg</option>
                      <option value="Veg">Veg</option>
                    </Select>
                  </FormControl>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "10px" }}
                  component={Link}
                  to="/pizza"
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Save
                </Button>
              </div>
                </form>
              </Paper>
            </Grid>
          </div>
         );
    }
}
 
export default Addpizza;