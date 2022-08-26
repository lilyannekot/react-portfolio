import React from "react";
import Projects from "./Projects";
import Container from "react-bootstrap/Container";

export default function Portfolio() {
    return (
        <Container fluid="md">
            <h1>My Projects</h1>
            <p>Click the projects below to learn more about them!</p>
            <Projects />
        </Container>
    )
}