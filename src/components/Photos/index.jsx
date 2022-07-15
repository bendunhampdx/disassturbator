import Images from "../../photos.json";
import React from "react";
import styles from "./Photos.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Photos = () => {
  return (
    <Container className={styles.outer}>
      <Row className="g-0">
        {Images &&
          Images.map((image) => {
            return (
              <Col sm={4} className={styles.photo}>
                <div className={styles.box} key={image.id}>
                  <img src={image.photo} alt="" />
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Photos;
