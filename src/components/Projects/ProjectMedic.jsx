import p2 from "../../assets/skills/css3.svg";
import p3 from "../../assets/skills/bootstrap5.svg";
import p4 from "../../assets/skills/javascript.svg";
import p6 from "../../assets/skills/react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectMedic() {
  return (
    <div className="proj-section gap-5 mt-5">
      <a
        href="https://medic.umn.ac.id/"
        target="_blank"
        className="d-flex proj-href"
        rel="noreferrer"
      >
        <img
          src="https://cdn.discordapp.com/attachments/916981806287421510/1130648534958477394/image.png"
          alt="woof"
          className="img-fluid proj-img"
        />
      </a>
      <div className="proj-text">
        <div className="proj-title">
          <h3>UMN Medical Center</h3>
        </div>
        <div className="proj-desc mt-4">
          <p>
            The UMN Medical Center website aims to provide comprehensive
            information about medic, facilities, and provide easy
            access for those who wish to apply for medical services.
          </p>
        </div>
        <div className="proj-lang d-flex mt-4">
          <img src={p6} alt="react" width={50} />
          <img src={p2} alt="css" width={40} />
          <img src={p3} alt="bootstrap" width={50} />
          <img src={p4} alt="javascript" width={45} />
        </div>
        <div className="proj-button mt-4 d-flex align-items-center">
          <a
            href="https://github.com/Ryuivan/MEDIC-2023"
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
