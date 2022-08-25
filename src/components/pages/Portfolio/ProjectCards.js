import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProjectCard() {
    return(
        <Card>
            <Card.Img />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text style={{ textAlign: "justfiy" }}></Card.Text>
                <Button></Button>
            </Card.Body>
        </Card>
    )
}