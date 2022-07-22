// import Images from "../../photos.json";
import images from "./index2";
import React from "react";
import styles from "./Photos.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Photos = () => {
  return (
    <Container className={styles.outer}>
      <Row className="g-0">
        <p>you're a regular asshole adams</p>
        <Col md={4} className={styles.photo}>
          <div className={styles.box}>
            <img src={images.ben1} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.avery1} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.jeff1} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.mike1} alt="" />
          </div>
          <div className={styles.box}>
            <img src={images.ben4} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.jeff5} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.avery6} alt="disassturbator band member" />
          </div>
        </Col>
        <Col md={4} className={styles.photo}>
          <div className={styles.box}>
            <img src={images.mike2} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.jeff2} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.ben2} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.avery2} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.avery4} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.ben5} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.mike5} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.jeff6} alt="disassturbator band member" />
          </div>
        </Col>
        <Col md={4} className={styles.photo}>
          <div className={styles.box}>
            <img src={images.ben3} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.avery3} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.jeff3} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.mike3} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.jeff4} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.mike4} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.avery5} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.ben6} alt="disassturbator band member" />
          </div>
          <div className={styles.box}>
            <img src={images.mike6} alt="disassturbator band member" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Photos;

// {Images &&
//   Images.map((image) => {
//     return (
//       <Col md={6} className={styles.photo}>
//         <div className={styles.box} key={image.id}>
//           <img src={image.photo} alt="" />
//         </div>
//       </Col>
//     );
//   })}
