import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import icon from "../../assets/icon.png";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navigationbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="fixed-top">
      <Navbar expand="lg" className="bg-light py-2">
        <Navbar.Brand href="#home" className="nav-brand">
          <Link to="/">
            <img src={icon} width={60} alt="icon.png" className="nav-icon" />
            Ryu Ivan Wijaya
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleNavToggle}
        >
          <Hamburger size={30} toggled={isNavOpen} toggle={setIsNavOpen} />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end align-items-center nav-content"
          in={isNavOpen}
        >
          <Nav className="mt-md-3 mt-lg-0">
            <Nav.Link
              as={Link}
              className="nav-link"
              to="home"
              smooth={true}
              duration={0}
              onClick={handleNavClose}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="nav-link"
              to="about"
              smooth={true}
              duration={0}
              onClick={handleNavClose}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="nav-link"
              to="projects"
              onClick={handleNavClose}
              smooth={true}
              duration={0}
            >
              Project
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="nav-link"
              to="experience"
              smooth={true}
              duration={0}
              onClick={handleNavClose}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="nav-link"
              to="contact"
              onClick={handleNavClose}
              smooth={true}
              duration={0}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
