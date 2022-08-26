import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Projects() {
  return (
    <div>
      <Card>
        <Card.Img src="public/assets/Volunteerists.png" alt="Arms raised in the air with hearts on the palms"/>
        <Card.Body>
          <Card.Title>Volunteerist</Card.Title>
          <Card.Text>
            An event hosting site with an emphasis on volunteer work.
            <Card br></Card>
            <Card.Link a href="https://github.com/lilyannekot/Volunteerist">
              Repository Link
            </Card.Link>
            <Card.Link a href="https://volunteerists.herokuapp.com/">
              Deployed Link
            </Card.Link>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src="" />
        <Card.Body>
          <Card.Title>Volunteerist</Card.Title>
          <Card.Text>
            An event hosting site with an emphasis on volunteer work.
            <Card br></Card>
            <Card.Link a href="https://github.com/lilyannekot/Volunteerist">
              Repository Link
            </Card.Link>
            <Card.Link a href="https://volunteerists.herokuapp.com/">
              Deployed Link
            </Card.Link>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
