import "./Contact.css";
import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      once: true,
      startEvent: "load",
    });
  }, []);

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8hw4j08",
        "template_dme8lew",
        form.current,
        "Q9eR1oE5WYIVotYJd"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successsfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Message error!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
    e.target.reset();
  }

  return (
    <div id="contact" className="py-5 px-3 px-sm-0">
      <ToastContainer />
      <Container
        className="mt-5"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div className="contact-title text-center">
          <h1>Contact Me</h1>
          <span className="title-underline"></span>
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <Row className="mt-5 mx-auto">
            <Col xs={8} className="form-group pt-3 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="from_name"
                required
              />
            </Col>
            <Col xs={8} className="form-group pt-3 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="from_email"
                required
              />
            </Col>
            <Col xs={8} className="form-group pt-3 mx-auto">
              <textarea
                name="message"
                id="msg"
                cols="30"
                rows="8"
                className="form-control"
                placeholder="Your Message"
                required
              ></textarea>
            </Col>
            <Col
              xs={12}
              className="pt-3 form-group d-flex justify-content-center"
            >
              <button type="submit" className="contact-btn">
                Submit
              </button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
}
