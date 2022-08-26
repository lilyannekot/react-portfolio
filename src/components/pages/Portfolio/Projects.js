import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Projects() {
  return (
    <div>
      <Card>
        <Card.Img
          src=".././public/assets/Volunteerists.png"
          alt="Arms raised in the air with hearts on the palms"
        />
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
          <Button className="btn">Learn More</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          src=".././public/assets/date-night-bites.jpeg"
          alt="couple cooking together in the kitchen"
        />
        <Card.Body>
          <Card.Title>Date Night Bites</Card.Title>
          <Card.Text>
            Start the night off right with a deletable meal paired with a spicy
            cocktail and that special someone.
            <Card br></Card>
            <Card.Link a href="https://github.com/lilyannekot/date-night-bites">
              Repository Link
            </Card.Link>
            <Card.Link a href="https://lilyannekot.github.io/date-night-bites/">
              Deployed Link
            </Card.Link>
          </Card.Text>
          <Button className="btn">Learn More</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src="" />
        <Card.Body>
          <Card.Title>Project 3</Card.Title>
          <Card.Text>
            Description to Come
            <Card br></Card>
            <Card.Link a href="">
              Repository Link
            </Card.Link>
            <Card.Link a href="">
              Deployed Link
            </Card.Link>
          </Card.Text>
          <Button className="btn">Learn More</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src="" />
        <Card.Body>
          <Card.Title>Project 4</Card.Title>
          <Card.Text>
            Description to Come
            <Card br></Card>
            <Card.Link a href="">
              Repository Link
            </Card.Link>
            <Card.Link a href="">
              Deployed Link
            </Card.Link>
          </Card.Text>
          <Button className="btn">Learn More</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src="" />
        <Card.Body>
          <Card.Title>Project 5</Card.Title>
          <Card.Text>
            Description to Come
            <Card br></Card>
            <Card.Link a href="">
              Repository Link
            </Card.Link>
            <Card.Link a href="">
              Deployed Link
            </Card.Link>
          </Card.Text>
          <Button className="btn">Learn More</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src="" />
        <Card.Body>
          <Card.Title>Project 6</Card.Title>
          <Card.Text>
            Description to Come
            <Card br></Card>
            <Card.Link a href="">
              Repository Link
            </Card.Link>
            <Card.Link a href="">
              Deployed Link
            </Card.Link>
          </Card.Text>
          <Button className="btn">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
