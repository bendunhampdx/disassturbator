/* eslint-disable jsx-a11y/iframe-has-title */
import styles from "./Music.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Music = () => {
  return (
    <Container className={styles.outer}>
      <Row>
        <div className={styles.meta}>
          <p>Auditory Hallucinations</p>
          <Col>
            <div className={styles.embed_responsive}>
              <iframe
                src="https://open.spotify.com/embed/artist/4jPVcBmNQZbnSfMXLPWwGc?utm_source=generator"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Music;
