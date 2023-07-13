import './Projects.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { projectsData } from '../projects_data.js';
import { Github } from 'react-bootstrap-icons';

function Projects() {
    return (
        <Container fluid="md">
            <Row className="justify-content-md-center" id="projectsPage">
                <Col className="align-items-center justify-content-center">
                    <h2>Projetos</h2>
                    <br />
                </Col>
            </Row>
            <Row xs={1} md={2} className="justify-content-md-center g-4">
                {projectsData.map((project, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" class="image-card" src={project.srcImage} />
                            <Card.Body>
                                <div id="card-line">
                                    <Card.Title>{project.title}</Card.Title>
                                    <Button
                                        href={project.urlGit}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-icon btn-github"
                                    >
                                        <Github className="align-top" />
                                    </Button>
                                </div>
                                <Card.Text>{project.description}</Card.Text>
                                <div id="card-line">
                                    <Card.Text>
                                        {project.technologies.map((technology, techIdx) => (
                                            <span key={techIdx}><b>
                                                {technology.tech}
                                                {techIdx !== project.technologies.length - 1 && ' - '}
                                            </b></span>
                                        ))}
                                    </Card.Text>
                                    <Button href="#" className="cta" > <span>Launch</span>
                                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                                            <path d="M1,5 L11,5"></path>
                                            <polyline points="8 1 12 5 8 9"></polyline>
                                        </svg></Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Projects;
