import "./Home.css";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div className="home-bg" id="home">
      <Container className="home-container">
        <div className="home-content px-3 px-sm-0">
          <div className="home-title text-center">
            <h1 className="my-3">
              <Typewriter
                options={{
                  strings: ["Halo", "Hello", "你好"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <h1>I'm Ryu Ivan Wijaya</h1>
          </div>
          <div className="home-desc mt-4">
            <h4>
              A student with a strong interest in user interface design and the
              development of attractive and responsive websites.
            </h4>
          </div>
          <div className="home-button mt-5">
            <Link to="projects" duration={0} smooth={true}>
              <button>My Projects</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
