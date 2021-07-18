import React from "react";
import "../stylings/footer.css";
import logo2 from "../images/logo2.png";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Icon } from "@material-ui/core";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div style={{marginTop:"10px"}}> 
            <h2>PIZZA HOME</h2>
            <img src={logo2} alt="" width="90" height="65" />
          </div>
          {/* Column1 */}
          <div className="col" style={{marginTop:"10px"}}>
            <h5>Shop Address</h5>
            <h6 className="list-unstyled">
              <li>24-230,MyHome Building</li>
              <li>KPHB Phase-1</li>
              <li>Hyderabad,Telangana</li>
              <li>PinCode : 500072</li>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col" style={{marginTop:"10px"}}>
            <h5>Contact Us</h5>
            <ui className="list-unstyled">
              <li>call to :- 040-254892</li>
              <li>Email :- pizzahouse@gmail.com</li>
              <li>Mobile :- 9838671489</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col" style={{marginTop:"10px"}}>
            <h5>Follow Us on</h5>
            <ui className="list-unstyled">
            <Icon> <InstagramIcon /> </Icon>
            <Icon> <FacebookIcon /> </Icon>
            <Icon> <TwitterIcon /> </Icon>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} PIZZA HOUSE | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;