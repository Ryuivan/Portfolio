import React, { useEffect } from "react";
import "./Experience.css";
import { Container } from "react-bootstrap";
import dataExp from "./dataExp";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    AOS.init({
      once: true,
      startEvent: "load",
    });
  }, []);

  return (
    <div id="experience" className="py-5 px-3 px-sm-0">
      <Container
        className="mt-5"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div className="exp-title text-center">
          <h1>My Experiences</h1>
          <span className="title-underline"></span>
        </div>
        <div className="exp-desc text-center mt-4">
          <p>Here you will find my experiences.</p>
        </div>
        <div className="exp-section mt-5 d-flex justify-content-center flex-wrap">
          {dataExp.map((item, i) => (
            <div className="exp-container" key={i}>
              <div className="logo">
                <img src={item.img} alt={item.name} width={70} height={70} />
              </div>
              <div className="job-desc text-center">
                <h5>{item.name}</h5>
                <p>{item.title}</p>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
