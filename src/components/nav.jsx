import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Container,Navbar } from "react-bootstrap";
 import logo2 from "../images/logo2.png";
 import logo1 from "../images/logo1.png";
 import { Dropdown,DropdownButton } from "react-bootstrap";

// import Badge from "@material-ui/core/Badge";
// import { withStyles } from "@material-ui/core/styles";
// const StyledBadge = withStyles((theme) => ({
//   badge: {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: "0 4px",
//   },
// }))(Badge);
const Nav = () => {
  return (
    <AppBar style={{backgroundColor:"yellowgreen"}}>
      <Toolbar>
        <div>
      <img src={logo1} alt="" width="90" height="65" />
      </div>
        <Button color="inherit" component={NavLink} to="/home">
          Home
        </Button>
       {/* <div style={{left:"5px"}}> */}
       {/* <DropdownButton id="dropdown-basic-button" title="Customer Actions"> */}
       <Button color="inherit" component={NavLink} to="/pizzalist">
                    PizzaList
                </Button>
                <Button color="inherit" component={NavLink} to="/coupon/list">
               CouponList
        </Button>
        <Button color="inherit" component={NavLink} to="/cart">
                    Cart
                </Button>
       {/* </DropdownButton> */}
       {/* </div> */}
       <div style={{paddingRight:"10px"}}>
        <DropdownButton id="dropdown-basic-button" title="Admin Actions">
        <Button color="inherit" component={NavLink} to="/customer/all">
          Customer
        </Button>
        <Button color="inherit" component={NavLink} to="/pizzas">
                    Generate Pizza
                </Button>
        <Button color="inherit" component={NavLink} to="/coupon/all">
         Coupon
        </Button>
       </DropdownButton>
       </div>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
