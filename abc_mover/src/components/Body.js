import React from "react";
import { Card, Button } from "react-bootstrap";

function Body() {
  return (
    <div cardContainer >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Local Moves</Card.Title>
          <Card.Text>
            Lets get you from point A to point B. 
          </Card.Text>
          <Button variant="primary">Click Me</Button>
        </Card.Body>
        <br/>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Long-Distance Moving</Card.Title>
          <Card.Text>
            Whether you're moving across town or across the country, we'll get you there.
          </Card.Text>
          <Button variant="primary">Click Me</Button>
        </Card.Body>
        <br/>
      </Card>
      <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Junk Removal</Card.Title>
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
