import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
const Nav = () => {
  return (
    <AppBar color="secondary">
      <Toolbar>
        <Box borderRadius={16} border={1} p={1}>
          <Typography variant="h6">PizzaHouse</Typography>
        </Box>
        <Button color="inherit" component={NavLink} to="/home">
          Home
        </Button>
        <Button color="inherit" component={NavLink} to="/customer/all">
          Customer
        </Button>
        <Button color="inherit" component={NavLink} to="/coupon/all">
         Coupon
        </Button>
        <Button color="inherit" component={NavLink} to="/contact">
          Contact Us
        </Button>
        
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
