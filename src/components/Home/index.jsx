import styles from "./Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Mike from "../../images/Band Shot/mike.jpeg";
import Ben from "../../images/Band Shot/ben.jpeg";
import Jeff from "../../images/Band Shot/jeff.jpeg";
import Avery from "../../images//Band Shot/avery.jpeg";

const Home = () => {
  return (
    <Container className={styles.outer}>
      <div className={styles.headline}>
        <p>Disassturbator</p>
      </div>
      <Row className="g-0">
        <Col xs={12} sm={6} lg={3}>
          <div className={styles.member}>
            <img src={Mike} alt="mike krutz of Disassturbator" />
          </div>
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <div className={styles.member}>
            <img src={Ben} alt="Ben Dunham of Disassturbator" />
          </div>
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <div className={styles.member}>
            <img src={Jeff} alt="Jeff Hadd of Disassturbator" />
          </div>
        </Col>
        <Col xs={12} sm={6} lg={3}>
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
