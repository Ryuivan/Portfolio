import p2 from "../../assets/skills/css3.svg";
import p3 from "../../assets/skills/bootstrap5.svg";
import p4 from "../../assets/skills/javascript.svg";
import p5 from "../../assets/skills/jquery.svg";
import p6 from "../../assets/skills/react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectWoof() {
  return (
    <div className="proj-section gap-5 mt-5">
      <a
        href="https://woofclothing.vercel.app/"
        target="_blank"
        className="d-flex proj-href"
        rel="noreferrer"
      >
        <img
          src="https://cdn.discordapp.com/attachments/916981806287421510/1130546601560121405/image.png"
          alt="woof"
          className="img-fluid proj-img"
        />
      </a>
      <div className="proj-text">
        <div className="proj-title">
          <h3>WOOF! E-Commerce</h3>
        </div>
        <div className="proj-desc mt-4">
          <p>
            WOOF! is a clothing website E-Commerce that me and my team
            established, specializing in front end aspect, designing unique
            shirts and logos. Our primary objective is to create a beautiful
            E-Commerce website that can sell our products through website that
            we have created.
          </p>
        </div>
        <div className="proj-lang d-flex mt-4">
          <img src={p6} alt="react" width={50} />
          <img src={p2} alt="css" width={40} />
          <img src={p3} alt="bootstrap" width={50} />
          <img src={p4} alt="javascript" width={45} />
          <img src={p5} alt="jquery" width={45} />
        </div>
        <div className="proj-button mt-4 d-flex align-items-center">
          <a
            href="https://github.com/Ryuivan/uas-pti-woof-ecommerce-revised"
            target="_blank"
            rel="noreferrer"
            className="d-flex"
          >
            <button>
              View Github &nbsp;
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
