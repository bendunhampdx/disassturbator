import styles from "./Contact.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className={styles.outer}>
      <Row>
        <Col>
          <div className={styles.meta}>
            <p>Drop us a line</p>
            <ul>
              <li>
                <a href="mailto:disassturbator@gmail.com">
                  disasturbator@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
