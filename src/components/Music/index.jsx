/* eslint-disable jsx-a11y/iframe-has-title */
import styles from "./Music.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Music = () => {
  return (
    <Container className={styles.outer}>
      <Row>
        {/* <div className={styles.meta}> */}
        <p>Auditory Hallucinations</p>
        <Col sm={12} md={6}>
          <div className={styles.embed_responsive}>
            <iframe
              src="https://bandcamp.com/EmbeddedPlayer/album=959422774/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://disassturbator.bandcamp.com/album/next-thing-i-knew">
                Next Thing I knew... by Disassturbator
              </a>
            </iframe>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className={styles.embed_responsive}>
            <iframe
              src="https://bandcamp.com/EmbeddedPlayer/album=647975473/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://disassturbator.bandcamp.com/album/nothing-since-forever-ep">
                Nothing Since Forever EP by Disassturbator
              </a>
            </iframe>
          </div>
        </Col>
        {/* </div> */}
      </Row>
    </Container>
  );
};

export default Music;
