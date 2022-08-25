import React from "react";
import ProjectCard from "./ProjectCards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Portfolio() {
    return (
        <Container fluid="md">
            <h1>My Projects</h1>
            <p>Click the projects below to learn more about them!</p>
            <Row>
                <Col md="4" className="project-card">
                    <ProjectCard />
                </Col>
                <Col md="4" className="project-card">
                    <ProjectCard />
                </Col>
                <Col md="4" className="project-card">
                    <ProjectCard />
                </Col>
            </Row>
        </Container>
    )
}