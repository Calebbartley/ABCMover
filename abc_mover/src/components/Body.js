import React from "react";
import { Card, Button } from "react-bootstrap";
import './Body.css';
import logo from "../assets/logo.png";

function Body() {
  return (
    <div className="cardContainer" >
      <Card border= "primary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} alt="" className="logo" />
        <Card.Body>
          <Card.Title className="title">Local Moves</Card.Title>
          <Card.Text>
            Lets get you from point A to point B. 
          </Card.Text>
          <Button border="Secondary" variant="primary">Click Me</Button>
        </Card.Body>
        <br/>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} alt="" className="logo" />
        <Card.Body>
          <Card.Title className="title" >Long-Distance Moving</Card.Title>
          <Card.Text>
            Whether you're moving across town or across the country, we'll get you there.
          </Card.Text>
          <Button variant="primary">Click Me</Button>
        </Card.Body>
        <br/>
      </Card>
      <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={logo} alt="" className="logo" />
      <Card.Body>
        <Card.Title className="title" >Junk Removal</Card.Title>
        <Card.Text>
          Whether you've just finished moving, Cleaning, Remodeling or even Yard work. We'll pick up the mess for you.
        </Card.Text>
        <Button variant="primary">Click Me</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Body;
