import styles from "./Videos.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Videos = () => {
  return (
    <Container className={styles.outer}>
      <Row className={styles.video_pack}>
        <p>anxiety attack</p>
        <Col>
          <div className={styles.embed_responsive}>
            <iframe
              src="https://www.youtube.com/embed/JdTs_vF0piU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
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
