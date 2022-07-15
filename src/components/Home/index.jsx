import styles from "./Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Mike from "../../images/Disassturbator/Band Shot/mike.jpeg";
import Ben from "../../images/Disassturbator/Band Shot/ben.jpeg";
import Jeff from "../../images/Disassturbator/Band Shot/jeff.jpeg";
import Avery from "../../images/Disassturbator/Band Shot/avery.jpeg";

const Home = () => {
  return (
    <Container className={styles.outer}>
      <div className={styles.headline}>
        <p>Disassturbator</p>
      </div>
      <Row className="g-0">
        <Col xs={6} lg={3}>
          <div className={styles.member}>
            <img src={Mike} alt="mike krutz of Disassturbator" />
          </div>
        </Col>
        <Col xs={6} lg={3}>
          <div className={styles.member}>
            <img src={Ben} alt="Ben Dunham of Disassturbator" />
          </div>
        </Col>
        <Col xs={6} lg={3}>
          <div className={styles.member}>
            <img src={Jeff} alt="Jeff Hadd of Disassturbator" />
          </div>
        </Col>
        <Col xs={6} lg={3}>
          <div className={styles.member}>
            <img src={Avery} alt="Avery Brueske of Disassturbator" />
          </div>
        </Col>
      </Row>
      <div className={styles.bottom_text}>
        <div>
          <p>nothing</p>
        </div>
        <div>
          <p>since</p>
        </div>
        <div>
          <p>forever</p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
