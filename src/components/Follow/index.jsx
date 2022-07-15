import styles from "./Follow.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Follow = () => {
  return (
    <Container className={styles.outer}>
      <Row>
        <Col>
          <div className={styles.meta}>
            <p>add us to your doom scroll</p>
            <ul>
              <li>
                <a href="https://www.facebook.com/disassturbator">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/disassturbator/">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCwHkx6iSMDSeVHdHxYhDdvg">
                  youtube
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Follow;
