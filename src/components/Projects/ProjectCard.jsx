import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProjectCard({
  projectName,
  projectDescription,
  imageUrl,
  liveLink,
  projectUrl,
}) {
  return (
    <Card style={{ width: "23rem" }} className="project-card">
      <div className="image-container">
        <Card.Img variant="top" src={imageUrl} className="project-image" />
      </div>
      <Card.Body className="project-details-container">
        <Card.Title className="project-heading">{projectName}</Card.Title>
        <Card.Text className="project-details">{projectDescription}</Card.Text>
        <Button>
        <a href={liveLink} className="project-yt-link">
          {" "}
          Check Live Demo
        </a>
        </Button>
       
       <Button>
       <a href={projectUrl} className="project-yt-link">
          See Code
        </a>
       </Button>
      </Card.Body>
    </Card>
  );
}
