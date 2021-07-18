import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import pizza5 from "../images/pizza5.jpg";
class Image extends Component {
    state = {  }
    render() { 
        return ( 
            <Card className="bg-dark text-white" style={{marginTop:"66px"}}>
  <Card.Img src={pizza5} alt="Card image" height="600px" width="1500px"/>
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
         );
    }
}
 
export default Image;