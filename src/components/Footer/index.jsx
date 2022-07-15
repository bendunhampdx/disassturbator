import styles from "./Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className={styles.footer}>
      <Row>
        <Col xs={4} className="g-0">
          <div className={styles.nothing}>
            <p>nothing</p>
          </div>
        </Col>
        <Col xs={4} className="g-0">
          <div>
            <p>since</p>
          </div>
        </Col>
        <Col xs={4} className="g-0">
          <div className={styles.forever}>
            <p>forever</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
