import styles from "./Videos.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Videos = () => {
  return (
    <Container className={styles.outer}>
      <Row className={styles.video_pack}>
        <p>anxiety attack</p>
        <Col sm={12}>
          <div className={styles.embed_responsive}>
            <iframe
              src="https://www.youtube.com/embed/JdTs_vF0piU"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </Col>
        <p>extended nap</p>
        <Col sm={12}>
          <div className={styles.embed_responsive}>
            <iframe
              src="https://www.youtube.com/embed/ro00-b8LhhA"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </Col>
      </Row>
      {/* <div className={styles.video_pack}>
        <h2></h2>
      </div> */}
    </Container>
  );
};

export default Videos;
