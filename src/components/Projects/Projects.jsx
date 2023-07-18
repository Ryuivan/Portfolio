import React, { useEffect } from "react";
import "./Projects.css";
import { Container } from "react-bootstrap";
import ProjectWoof from "./ProjectWoof";
import ProjectMedic from "./ProjectMedic";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      once: true,
      startEvent: "load",
    });
  }, []);

  return (
    <div id="projects" className="py-5 px-3 px-sm-0 project-bg">
      <Container
        className="mt-5"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div className="projects-title">
          <h1>My Projects</h1>
          <span className="title-underline"></span>
        </div>
        <div className="projects-desc text-center mt-4">
          <p>
            Here you will find some of my fully deployed website projects that I
            have created and developed. Tap the image to visit my project
            website.
          </p>
        </div>
        <ProjectWoof />
        <ProjectMedic />
      </Container>
    </div>
  );
}
