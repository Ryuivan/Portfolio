import React, { useEffect } from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import skills from "./dataSkills";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      once: true,
      startEvent: "load",
    });
  }, []);

  return (
    <div id="about" className="py-5 px-3 px-sm-0">
      <Container
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div className="about-title text-center mt-5">
          <h1>About Me</h1>
          <span className="title-underline"></span>
        </div>
        <div className="about-desc text-center mt-4">
          <p>
            Here you will discover additional details about my background, areas
            of expertise, and my current proficiencies primarily focused on
            programming and technology.
          </p>
        </div>

        <Row className="mt-5 g-5">
          <Col md={6}>
            <h4 className="self-title">Get to know me!</h4>
            <p className="self-paragraph">
              I am a responsible, honest, dedicated and diligent individual. My
              enthusiasm for self-development through new challenges is very
              high. I also like to help people who are having difficulties in
              the academic field.
            </p>
            <p className="self-paragraph">
              As a student at Multimedia Nusantara University, I am committed to
              giving my best contribution in every job. Integrity and honesty
              are important to me. I am happy to share my knowledge and
              experiences with others, because I believe that helping each other
              creates an environment that supports mutual growth.
            </p>
            <p className="self-paragraph">
              I am ready to face new challenges and continue to improve my
              skills. Through this portfolio, I want to show my dedication and
              readiness to collaborate in achieving common goals.
            </p>
          </Col>

          <Col md={6}>
            <div className="skill-title">
              <h4>My Skills</h4>
            </div>
            <div className="skill-container d-flex flex-wrap">
              {skills.map((skill, i) => (
                <div className="skill-wrapper text-center" key={i}>
                  <div className="skill-img">
                    <img
                      src={skill.img}
                      alt={skill.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="skill-name">
                    <p>{skill.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
