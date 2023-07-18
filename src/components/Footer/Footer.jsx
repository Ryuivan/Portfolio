import "./Footer.css";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="pt-3 px-3 px-sm-0">
      <Container>
        <div className="footer-content">
          <h2>Ryu Ivan Wijaya - 65448</h2>
        </div>
        <div className="footer-line"></div>
        <div className="copyright">
            <p>&copy; 2023 Ryu Ivan Wijaya. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
