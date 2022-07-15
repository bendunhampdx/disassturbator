import { Container, Row, Col } from "react-bootstrap";
import styles from "./News.module.scss";
import Updates from "../../news.json";

const News = () => {
  return (
    <Container className={styles.main}>
      <Row className="g-0">
        {Updates &&
          Updates.map((info) => {
            return (
              <Col sm={12}>
                <div className={styles.outer}>
                  <div className={styles.news_meta} key={info.id}>
                    <div className={styles.title}>
                      <p>{info.title}</p>
                    </div>
                    <div className={styles.content}>
                      <img src={info.content} alt="" />
                    </div>
                    <div className={styles.description}>
                      <p>{info.description}</p>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default News;
